import { Component, OnInit, inject } from '@angular/core';
import { CommerceService } from '../../services/commerce.service';
import { Observable } from 'rxjs';
import { ICommerce } from '../../types';
import { Store } from '@ngrx/store';
import * as CommerceActions from '../../states/commerce/commerce.action'
import * as CommerceSelectors from '../../states/commerce/commerce.selector'

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
  commerceService = inject(CommerceService);
  commerces$!: Observable<ICommerce[]>;
  error$!: Observable<string | null>;
  loading$!: Observable<boolean>;

  constructor(private store: Store<{ commerces: ICommerce[] }>) {
    this.store.dispatch(CommerceActions.fetchCommerce());
    this.commerces$ = this.store.select(CommerceSelectors.selectCommerces);
    this.error$ = this.store.select(CommerceSelectors.selectCommerceError);
    this.loading$ = this.store.select(CommerceSelectors.selectCommerceLoading);
  }

  ngOnInit(): void {
    this.commerces$.subscribe(commerces => {
      console.log('Commerces:', commerces);
    });
    this.loading$.subscribe(loading => {
      console.log('loading:', loading);
    });
  }
}

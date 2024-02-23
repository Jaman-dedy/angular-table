import { Component } from '@angular/core';
import { ICommerce } from '../types';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as CommerceActions from '../states/commerce/commerce.action';
import * as CommerceSelectors from '../states/commerce/commerce.selector';
import { TableComponent } from '../components/table/table.component';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableComponent, AsyncPipe, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  displayedColumns: string[] = [
    'name',
    'brand',
    'style',
    'hop',
    'yeast',
    'malts',
    'ibu',
    'alcohol',
    'blg',
  ];

  commerces: Observable<ICommerce[]>;
  error!: Observable<string | null>;
  loading!: Observable<boolean>;
  DATA_SIZE: number = 100;

  constructor(
    private store: Store<{
      commerces: ICommerce[];
      error: string;
      loading: boolean;
    }>
  ) {
    this.store.dispatch(CommerceActions.fetchCommerce({ size: this.DATA_SIZE }));
    this.commerces = this.store.select(CommerceSelectors.selectCommerces);
    this.error = this.store.select(CommerceSelectors.selectCommerceError);
    this.loading = this.store.select(CommerceSelectors.selectCommerceLoading);
  }

}

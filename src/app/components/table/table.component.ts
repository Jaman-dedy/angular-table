import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ICommerce } from '../../types';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatSort,
    MatGridListModule,
    MatSelectModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements AfterViewInit, OnChanges {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() data!: ICommerce[];
  @Input() displayedColumns!: string[];

  dataSource = new MatTableDataSource<ICommerce>(this.data);

  brands: string[] = []; // reusable select components
  selectedBrands = new FormControl([]); // for select component

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.initializeDataSource();
    }
  }

  initializeDataSource(): void {
    if (this.data) {
      this.dataSource = new MatTableDataSource<ICommerce>(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.brands = this.data.map(commerce => commerce.brand)
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  filterByBrand(selectedBrands: string[]): void {
    if (!this.dataSource) return;
    const filterValue = selectedBrands.map(brand => brand.trim().toLowerCase());
    this.dataSource.filterPredicate = (item: ICommerce) => {
      return filterValue.includes(item.brand.toLowerCase());
    };
    this.dataSource.filter = filterValue.join(',');
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SelectComponent } from '../select/select.component';
import { SearchInputComponent } from '../search-input/search-input.component';
import { mockData } from '../../mock';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        CommonModule,
        TableComponent,
        SelectComponent,
        SearchInputComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.data = mockData; // Initialize the component's data
    component.initializeDataSource();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize data source on changes', () => {
    expect(component.dataSource.data).toEqual(mockData);
  });

  it('should filter data by brand', () => {
    component.filterByBrand(['Brand A']);
    expect(component.dataSource.filteredData.length).toBe(1);
    expect(component.dataSource.filteredData[0].brand).toBe('Brand A');
  });
});

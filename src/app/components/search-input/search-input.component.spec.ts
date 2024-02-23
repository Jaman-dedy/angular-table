import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from './search-input.component';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [MatInputModule, BrowserAnimationsModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit input change event', () => {
    spyOn(component, 'onInputChange');
    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = 'Hercules';
    const event = new Event('keyup');
    inputElement.dispatchEvent(event);
    fixture.detectChanges();
    expect(component.onInputChange).toHaveBeenCalledWith(event);
  });
});

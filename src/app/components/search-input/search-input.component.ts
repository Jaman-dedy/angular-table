import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {
  constructor() { }
  @Output() searchInputChange: EventEmitter<string> = new EventEmitter<string>()
  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value
    this.searchInputChange.emit(inputValue)
  }
}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  @Input() selectedBrands!: FormControl
  @Input() brands!: string[]
  @Output() selectionChange = new EventEmitter<string[]>();

  onSelectionChange() {
    const selectedValues = this.selectedBrands.value || []
    this.selectionChange.emit(selectedValues)
  }
}

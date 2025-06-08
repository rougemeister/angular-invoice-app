import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  dropdownOpen = false;

  statuses = [
    { label: 'Draft', value: 'draft', checked: false },
    { label: 'Pending', value: 'pending', checked: false },
    { label: 'Paid', value: 'paid', checked: false },
  ];

  @Output() filterChanged = new EventEmitter<string[]>();

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  onStatusChange() {
    const selectedStatuses = this.statuses
      .filter(s => s.checked)
      .map(s => s.value);
    this.filterChanged.emit(selectedStatuses);
  }

}

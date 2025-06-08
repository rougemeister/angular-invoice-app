import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-button',
  standalone: true,
  imports: [],
  templateUrl: './edit-button.component.html',
  styleUrl: './edit-button.component.scss'
})
export class EditButtonComponent {
  @Input() invoiceId!: string;
  router = inject(Router);

  onEditClick(): void {
    if (this.invoiceId) {
      this.router.navigate(['edit-invoice-details', this.invoiceId]);
      console.log('Edit button clicked for invoice ID:', this.invoiceId);
    }
  }
}

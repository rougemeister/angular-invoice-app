import { Component, inject, Input, OnInit } from '@angular/core';
import { Invoice } from '../../core/models/model';


@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent {
  
 @Input() invoices!: Invoice[];

  
}

import { Component, inject, Input, OnInit } from '@angular/core';
import { Invoice } from '../../core/models/model';
import { RouterLink } from '@angular/router';
import { DataService } from '../../core/services/data.service';


@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent {
   invoiceData: Invoice[] = [];
    dataService = inject(DataService);
    ngOnInit(): void {
      this.dataService.getInvoices().then((data: Invoice[]) => {
        this.invoiceData = data;
      }).catch(error => {
        console.error('Error fetching invoice data:', error);
      });
    }

  
}

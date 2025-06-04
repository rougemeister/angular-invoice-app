import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { OnInit } from '@angular/core';
import { DataService } from './core/services/data.service';
import { Invoice } from './core/models/model';
import { inject } from '@angular/core';
import { InvoiceComponent } from "./features/invoice/invoice.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, InvoiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-invoice-app';

  invoiceData: Invoice[] = [];
  dataService = inject(DataService);
  ngOnInit(): void {
    this.dataService.getInvoices().then((data: Invoice[]) => {
      this.invoiceData = data;
      console.log('Invoice data fetched successfully:', this.invoiceData);
    }).catch(error => {
      console.error('Error fetching invoice data:', error);
    });
  }

}

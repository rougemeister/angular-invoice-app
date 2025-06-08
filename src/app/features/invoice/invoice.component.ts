import { Component, inject, Input, OnInit } from '@angular/core';
import { Invoice } from '../../core/models/model';
import { RouterLink ,Router} from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { AddNewButtonComponent } from '../../shared/components/buttons/add-new-button/add-new-button.component';
import { FilterComponent } from "../../shared/components/filter/filter.component";
@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [AddNewButtonComponent, FilterComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent {


  invoices: Invoice[] = [];
  dataService = inject(DataService);
  router = inject(Router);
  loading: boolean = true;
  error: string | null = null;

  ngOnInit(): void {
    this.loadInvoices();
  }

  async loadInvoices(): Promise<void> {
    try {
      this.loading = true;
      this.error = null;
      
      this.invoices = await this.dataService.getInvoices();
    
      
    } catch (error) {
      console.error('Error fetching invoice data:', error);
      this.error = 'Failed to load invoices. Please try again.';
    } finally {
      this.loading = false;
    }
  }

  navigateToDetails(invoiceId: string): void {
    console.log('Navigating to invoice details for ID:', invoiceId);
    this.router.navigate(['/invoice', invoiceId]);
  }

  retryLoading(): void {
    this.loadInvoices();
  }
}


  

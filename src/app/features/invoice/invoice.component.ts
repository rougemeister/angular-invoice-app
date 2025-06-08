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
export class InvoiceComponent implements OnInit {
  invoices: Invoice[] = [];
  filteredInvoices: Invoice[] = [];
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

      // Initialize filteredInvoices with all invoices initially
      this.filteredInvoices = [...this.invoices];
    } catch (error) {
      console.error('Error fetching invoice data:', error);
      this.error = 'Failed to load invoices. Please try again.';
    } finally {
      this.loading = false;
    }
  }

  applyFilter(selectedStatuses: string[]): void {
    if (selectedStatuses.length === 0) {
      this.filteredInvoices = [...this.invoices];
    } else {
      this.filteredInvoices = this.invoices.filter(invoice =>
        selectedStatuses.includes(invoice.status.toLowerCase())
      );
    }
  }

  navigateToDetails(invoiceId: string): void {
    this.router.navigate(['/invoice', invoiceId]);
  }

  retryLoading(): void {
    this.loadInvoices();
  }
}



  

import { Component, OnInit,inject,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '../../core/models/model';
import { DataService } from '../../core/services/data.service';
import { DatePipe, CurrencyPipe } from '@angular/common'; // Import needed here




@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './invoice-details.component.html',
  styleUrl: './invoice-details.component.scss'
})
export class InvoiceDetailsComponent implements OnInit{
  route = inject(ActivatedRoute);
  router = inject(Router);
  dataService = inject(DataService);
  
  invoiceId: string | null = null;
  invoice: Invoice | null = null;
  loading: boolean = true;
  error: string | null = null;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.invoiceId = params['id'];
      console.log('Invoice ID:', this.invoiceId);
      
      if (this.invoiceId) {
        this.loadInvoiceDetails();
      } else {
        this.error = 'No invoice ID provided';
        this.loading = false;
      }
    });
  }

  async loadInvoiceDetails(): Promise<void> {
    try {
      this.loading = true;
      this.error = null;
      
      console.log('Loading invoice details for ID:', this.invoiceId);
      this.invoice = await this.dataService.getInvoiceById(this.invoiceId!);
      
      if (!this.invoice) {
        this.error = `Invoice with ID "${this.invoiceId}" not found`;
        console.warn('Invoice not found:', this.invoiceId);
      } else {
        console.log('Invoice loaded successfully:', this.invoice);
      }
      
    } catch (error) {
      console.error('Error loading invoice details:', error);
      this.error = 'Failed to load invoice details. Please try again.';
    } finally {
      this.loading = false;
    }
  }

  goBack(): void {
    this.router.navigate(['/invoices']);
  }
}




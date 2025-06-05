import { Routes } from '@angular/router';
import { InvoiceComponent } from './features/invoice/invoice.component';
import { NewInvoiceFormComponent } from './features/new-invoice-form/new-invoice-form.component';
import { EditInvoiceFormComponent } from './features/edit-invoice-form/edit-invoice-form.component';
import { InvoiceDetailsComponent } from './features/invoice-details/invoice-details.component';

export const routes: Routes = [
    { path: 'invoices', component: InvoiceComponent },
    { path: 'new-invoice', component: NewInvoiceFormComponent },
    { path: 'edit-invoice/:id', component: NewInvoiceFormComponent },
    { path: 'invoice-details/:id', component: InvoiceDetailsComponent  },
    { path: 'edit-invoice-details/:id', component: EditInvoiceFormComponent},
    { path: '**', redirectTo: '/invoices' }
];



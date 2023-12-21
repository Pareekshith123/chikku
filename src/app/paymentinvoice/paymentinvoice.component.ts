// paymentinvoice.component.ts

import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
interface CustomerDetails {
  customer_name: string;
  customer_email: string;
  customer_contact: string;
}
interface Invoice {
  customer_details: CustomerDetails;
  amount: number;
  order_id: string;
  email_status: string;
  sms_status: string;
  short_url: string;
}
@Component({
  selector: 'app-paymentinvoice',
  templateUrl: './paymentinvoice.component.html',
  styleUrls: ['./paymentinvoice.component.css']
})
export class PaymentinvoiceComponent implements OnInit {
  invoices: Invoice[] = [];
  loading: boolean = true;
  error: string | null = null;
  page = 1;
  pageSize = 4;
  maxPages = 8;

  constructor(private adminServiceService: AdminServiceService) {}

  ngOnInit() {
    this.adminServiceService.getAllInvoices().subscribe(
      (response) => {
         this.invoices = response as Invoice[];
        this.loading = false;
        console.log('Invoices:',   this.invoices);
      },
      (error) => {
        this.loading = false;
        this.error = 'Error fetching invoices. Please try again later.';
        console.error('Error fetching invoices:', error);
      }
    );
  }
 
  get totalPages(): number {
    return Math.ceil(this.invoices.length / this.pageSize);
  }

  get pages(): number[] {
    const total = this.totalPages;
    const currentPage = this.page;
    const maxPages = this.maxPages;

    if (total <= maxPages) {
      return Array.from({ length: total }, (_, i) => i + 1);
    } else {
      const halfMaxPages = Math.floor(maxPages / 2);
      const startPage = Math.max(currentPage - halfMaxPages, 1);
      const endPage = Math.min(startPage + maxPages - 1, total);

      return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    }
  }

  setPage(newPage: number): void {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.page = newPage;
    }
  }



  
}

// paymentinvoice.component.ts

import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-paymentinvoice',
  templateUrl: './paymentinvoice.component.html',
  styleUrls: ['./paymentinvoice.component.css']
})
export class PaymentinvoiceComponent implements OnInit {
  invoices: any = {};
  loading: boolean = true;
  error: string | null = null;

  constructor(private adminServiceService: AdminServiceService) {}

  ngOnInit() {
    this.adminServiceService.getAllInvoices().subscribe(
      (response) => {
         this.invoices = response;
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
}

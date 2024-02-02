import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
interface CustomerDetails {
  customer_name: string;
  customer_email: string;
  customer_contact: string;
}

interface Invoice {
  serviceStarted: any;
  isAssigned: any;
  orderStatus: any;
  orderNumber: any;
  totalPrice: any;
  mobileNumber: any;
  emailId: any;
  userName: any;
  customer_details: CustomerDetails;
  amount: number;
  order_id: string;
  email_status: string;
  sms_status: string;
  short_url: string;
}


@Component({
  selector: 'app-totalorders',
  templateUrl: './totalorders.component.html',
  styleUrls: ['./totalorders.component.css']
})
export class TotalordersComponent {
  isSearching:boolean=false;
  invoices: Invoice[] = [];
  loading: boolean = true;
  error: string | null = null;
  page = 1;
  pageSize = 6;
  maxPages = 8;
  displayedColumns: string[] = ['userName', 'emailId', 'mobileNumber', 'totalPrice', 'orderNumber', 'orderStatus', 'isAssigned', 'serviceStarted'];
  dataSource = new MatTableDataSource<Invoice>([]); // Initialize with an empty array
  orders1: Invoice[] = [];

  constructor(private adminServiceService: AdminServiceService, private router: Router) {}

  back() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.adminServiceService.getAllInvoices().subscribe(
      (response) => {
        this.invoices = response as Invoice[];
        this.dataSource = new MatTableDataSource<Invoice>(this.invoices);
        
        this.loading = false;
        console.log('Invoices:', this.invoices);
      },
      (error) => {
        this.loading = false;
        this.error = 'Error fetching invoices. Please try again later.';
        console.error('Error fetching invoices:', error);
      }
    );
  }
  

  get totalPages(): number {
    return Math.ceil(this.dataSource.data.length / this.pageSize);
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
  search(event: any): void {
    if (parseInt((event.target as HTMLInputElement).value, 10) > 0) {
      this.isSearching=true;
      console.log(this.isSearching)
    }
    this.isSearching=true;
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    console.log("searching",searchTerm)
    this.orders1 = this.invoices.filter(order =>
      Object.values(order)
        .some(value => value && typeof value === 'string' && value.toLowerCase().includes(searchTerm))
    );

    console.log("searched array",this.orders1)
  }
  
  setPage(event: PageEvent): void {
    if (event.pageIndex !== undefined) {
      this.page = event.pageIndex + 1;
    }
  }
}

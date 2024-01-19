import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import {Router} from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
interface Order {
  orderId: number;
  userName: string;
  emailId: string;
  totalPrice: number;
  orderStatus: string;
  paymentStatus: string;
  dateSlot: string;
  timeSlot: string;
}
@Component({
  selector: 'app-completed-order',
  templateUrl: './completed-order.component.html',
  styleUrls: ['./completed-order.component.css']
})
export class CompletedOrderComponent {
  orders: Order[] = [];
  loading: boolean = true;
  page = 1; 
  pageSize = 5;
  maxPages = 8;
  displayedColumns: string[] = ['userName', 'emailId', 'mobileNumber', 'totalPrice', 'orderNumber', 'orderStatus', 'isAssigned', 'serviceStarted'];
  dataSource = new MatTableDataSource<Order>([]);
  constructor(private adminservice: AdminServiceService,private router:Router) {}

  getOrders() {
    this.adminservice.getAllCompletedOrders().subscribe(
      (data) => {
        this.orders = data;
        this.dataSource = new MatTableDataSource<Order>(this.orders);
        this.loading = false;
        console.log("All Orders:", this.orders);
      },
      (error) => {
        this.loading = false;
        console.error("Error fetching orders:", error);
        // You can add further error handling logic here
      }
    );
  }
back(){
  this.router.navigate(['/']);
}
  ngOnInit() {
    this.getOrders();
  }
  get totalPages(): number {
    return Math.ceil(this.orders.length / this.pageSize);
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

  setPage(event: PageEvent): void {
    if (event.pageIndex !== undefined) {
      this.page = event.pageIndex + 1;
    }
  }
}

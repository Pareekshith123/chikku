import { Component, OnInit } from '@angular/core';
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
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
 
export class OrdersComponent implements OnInit {
  isSearching:boolean=false;
  orders: Order[] = [];
  page = 1; 
  pageSize = 5;
  maxPages = 8;
  displayedColumns: string[] = ['userName', 'emailId', 'mobileNumber', 'totalPrice', 'orderNumber', 'orderStatus', 'isAssigned', 'serviceStarted'];
  dataSource = new MatTableDataSource<Order>([]);
  orders1: Order[]=[];
  constructor(private adminservice: AdminServiceService,private router:Router) {}

  getOrders() {
    this.adminservice.getAllPendingOrders().subscribe(
      (data) => {
        this.orders = data;
        this.dataSource = new MatTableDataSource<Order>(this.orders);
        console.log("All Orders:", this.orders);
      },
      (error) => {
        console.error("Error fetching orders:", error);
        // You can add further error handling logic here
      }
    );
  }
  back() {
    this.router.navigate(['/']);
  throw new Error('Method not implemented.');
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
  search(event: any): void {
    if (parseInt((event.target as HTMLInputElement).value, 10) > 0) {
      this.isSearching=true;
      console.log(this.isSearching)
    }
    this.isSearching=true;
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    console.log("searching",searchTerm)
    this.orders1 = this.orders.filter(order =>
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

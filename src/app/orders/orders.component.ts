import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
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
  orders: Order[] = [];
  page = 1; 
  pageSize = 5;
  maxPages = 8;
  constructor(private adminservice: AdminServiceService) {}

  getOrders() {
    this.adminservice.getAllOrders().subscribe(
      (data) => {
        this.orders = data;
        console.log("All Orders:", this.orders);
      },
      (error) => {
        console.error("Error fetching orders:", error);
        // You can add further error handling logic here
      }
    );
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

  setPage(newPage: number): void {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.page = newPage;
    }
  }
}

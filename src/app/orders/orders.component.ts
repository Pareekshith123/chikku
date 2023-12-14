import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: any = [];

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
}

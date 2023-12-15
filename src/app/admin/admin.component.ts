// admin.component.ts
import { Component, EventEmitter, Input, Output, OnInit ,AfterViewInit} from '@angular/core';
import { WebSocketService } from '../web-socket.service';
import Chart from 'chart.js/auto';
import { AdminServiceService } from '../admin-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit,AfterViewInit {
  PaylaterOrders:any=[];
  PendingOrders:any=[];
  CompletedOrders:any=[];
  orders: any = [];
  categories: any[] = [];
  selectedCategoryId: number = 0;
  subcategories: any[] = [];
  subCategories:any[]=[];
  selectedSubCategoryId:any=0;
  services:any[]=[];
  ngAfterViewInit(): void {
    this.createChart();
  }
  constructor(private webSocketService: WebSocketService,private categoryService: AdminServiceService) {

  }

  ngOnInit() {
    // this.initWebSocket();
    this.getCategories();
    this.getSubCategories();
    this.getServies();
    Swal.fire("welcome");
    this. getOrders();
    this. getPendingOrders();
    this.  getCompletedOrders();
    this.getPaylaterOrders();
  }
  getCategories(): void {
    this.categoryService.getCategories().subscribe((data: any) => {
      this.categories = data;
      console.log( this.categories);
    });
  }
  getSubCategories(): void {
    this.categoryService.getAllSubcategory().subscribe((data: any) => {
      this.subCategories = data;
      console.log( this.subCategories);
    });
  }
  getServies(): void {
    this.categoryService.getAllServices().subscribe((data: any) => {
      this.services = data;
      console.log( this.services);
    });
  }

  createChart() {
    const ctx = document.getElementById('ordersChart') as HTMLCanvasElement;
    const ordersChart = new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            label: 'Total Orders',
            data: [30, 45, 60, 23, 78, 56, 40], 
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(75, 192, 192)',
              'rgb(255, 205, 86)',
              'rgb(201, 203, 207)',
              'rgb(54, 162, 235)'
            ],
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  private initWebSocket() {
    const socketUrl = 'your_websocket_url'; // Replace with your WebSocket server URL
    const socket = this.webSocketService.connect(socketUrl);

    // Handle incoming messages
    socket.subscribe(
      (message) => {
        console.log('Received message:', message);
        // Add your logic to handle WebSocket messages here
      },
      (error) => {
        console.error('WebSocket error:', error);
      },
      () => {
        console.log('WebSocket connection closed');
      }
    );
  }
  getOrders() {
    this.categoryService.getAllOrders().subscribe(
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
  getPendingOrders() {
    this.categoryService.getAllPendingOrders().subscribe(
      (data) => {
        this.PendingOrders = data;
        console.log("pending Orders:",this.PendingOrders);
      },
      (error) => {
        console.error("Error fetching orders:", error);
        // You can add further error handling logic here
      }
    );
    
  }
  getCompletedOrders() {
    this.categoryService.getAllCompletedOrders().subscribe(
      (data) => {
        this.CompletedOrders = data;
        console.log("CompletedOrders Orders:",this.CompletedOrders);
      },
      (error) => {
        console.error("Error fetching orders:", error);
        // You can add further error handling logic here
      }
    );
    
  }
  getPaylaterOrders(): void {
    this.categoryService.getAllPaylaterOrders().subscribe(
        (data: any) => {
            if (data) {
                this.PaylaterOrders = data;
                console.log("PaylaterOrders Orders:", this.PaylaterOrders);
            } else {
                console.error("Received null or undefined data.");
            }
        },
        (error) => {
            console.error("Error fetching orders:", error);
            // You can add further error handling logic here
        }
    );
}

}

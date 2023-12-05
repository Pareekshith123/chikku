import { Component, EventEmitter, Input, Output, OnInit ,AfterViewInit} from '@angular/core';
import Chart from 'chart.js/auto';
import { AdminServiceService } from '../admin-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit,AfterViewInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    this.createChartradar();
  }
  createChartradar() {
    const ctx = document.getElementById('radarChart') as HTMLCanvasElement;
    const ordersChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [
          'Laptops',
          'Destops',
          'Printer',
          'Networking',
          'Projector',
          'Biometric',
          'Server'
        ],
        datasets: [{
          label: 'Paylater orders',
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          label: 'Paid orders',
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      },
      options: {
        layout: {
          padding: 10
      },
        scales: {
          y: {
            beginAtZero: true,
          },
          
        },
      },
    });
  }
  
}

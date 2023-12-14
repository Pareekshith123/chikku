import { Component, EventEmitter, Input, Output, OnInit ,AfterViewInit} from '@angular/core';
import Chart from 'chart.js/auto';
import { AdminServiceService } from '../admin-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit,AfterViewInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    this.createChartradar();
  }
  createChartradar() {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    const ordersChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'


        ],
        datasets: [{
          label: 'Total Orders ',
          data: [65, 59, 80, 81, 56, 55, 40,23,45,34,56,66],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(54, 204, 235, 0.2)',
            'rgba(54, 169, 235, 0.2)',
            'rgba(54, 184, 235, 0.2)',
            'rgba(54, 456, 235, 0.2)',
            'rgba(54, 556, 235, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        layout: {
          padding: 5
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

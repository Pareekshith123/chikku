import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { AdminServiceService } from '../admin-service.service';

// timestamp-to-date.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampToDate'
})
export class TimestampToDatePipe implements PipeTransform {
  transform(timestamp: number): string {
   
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString(); // Adjust the format as needed
  }
}


interface CustomerDetails {
name: any;
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
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
   gst:number=0;
  invoicePdfData: any ={};
  customerName:string='';
  constructor(private adminServiceService: AdminServiceService) {

  }
  transform(timestamp: number): Date {
    // Assuming the timestamp is in seconds (if it's in milliseconds, divide by 1000)
    return new Date(timestamp * 1000);
  }
  ngOnInit() {
    this.getInvoice();
    this.gst=(1970*(18/100));
  }

  getInvoice() {
    this.adminServiceService.getInvoiceByInvoiceId().subscribe(
      (res: Invoice[]) => {
        this.invoicePdfData = res;
        console.log(this.invoicePdfData);
      },
      (error) => {
        console.error('Error fetching invoices:', error);
        // Handle the error as needed
      }
    );
  }
   downloadAsPdf() {
    const element = document.querySelector('#invoice') as HTMLElement;

    html2canvas(element, { scale: 3 }).then((canvas) => {


      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'cm', 'a4');

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('invoice.pdf');
    });
  }
}

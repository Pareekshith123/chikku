import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { AdminServiceService } from '../admin-service.service';

interface CustomerDetails {
  name: any;
  customer_name: string;
  customer_email: string;
  customer_contact: string;
}

interface ServicesDtos {
  serviceName: string;
  description: string;
  price: number;
  quantity: number;
  serviceId: number;
}

interface AddressDto {
  address1: string;
  address2: string;
  addressId: number;
  addressType: string;
  addressTypeName: string;
  city: string;
  defalutAddress: boolean;
  landmark: string;
  pincode: string;
  state: string;
}

interface Invoice {
  orderId: any;
  createdDate: any;
  date: any;
  id: any;
  description: readonly unknown[];
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
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  gst: number = 0;
  invoicePdfData: Invoice = {} as Invoice;
  invoiceOrderData: any = {};
  orderId: number = 507;
  orders: ServicesDtos[] = [];
  total: number = 0;
  address: any = {};
  products: number[] = [];
  sumOfProducts: number = 0;

  constructor(private adminServiceService: AdminServiceService) {}

  ngOnInit() {
    this.getInvoceByOrders();
    this.getInvoice();
   
  }

  getInvoice() {
    this.adminServiceService.getInvoiceByInvoiceId(this.orderId).subscribe(
      (res: Invoice) => {
        this.invoicePdfData = res;
        console.log(this.invoicePdfData);
  
        if (this.invoicePdfData.totalPrice != null && !isNaN(this.invoicePdfData.totalPrice)) {
         
          // Calculate GST based on total and not on the difference
          this.gst = this.sumOfProducts * (18 / 100);
          console.log('GST:', this.gst);
          console.log('Total Price:', this.invoicePdfData.totalPrice);
        } else {
          console.error('Invalid total price:', this.invoicePdfData.totalPrice);
        }
      },
      (error) => {
        console.error('Error fetching invoices:', error);
      }
    );
  }
  getInvoceByOrders() {
    this.adminServiceService.getInvoiceOrderById(this.orderId).subscribe((res) => {
      console.log('before invoiceorder', res);
      this.invoiceOrderData = res;
      this.address = res.addressDTO;
      console.log('after address', this.address);
      console.log('before invoiceorder', this.invoiceOrderData);
      this.orders = res.servicesDtos;
      for (let i = 0; i < this.orders.length; i++) {
     
      const order = this.orders[i];
      console.log("order",order)
      const product = order.quantity * order.price;
      this.products.push(product);
      this.sumOfProducts += product;
    }
    this.gst = this.sumOfProducts * (18 / 100);

      console.log('after invoiceorder', this.orders);
    });
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

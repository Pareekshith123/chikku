import { Component,OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.css']
})
export class EngineerComponent  {
  
  constructor(private adminServiceService:AdminServiceService){}
  PendingOrders:any=[];
  allEngineers:any=[];
  selectedEngineerId: number=0;
  selectedOrderId:number=0;
  // engineer = {
  //   engineerId: 0,
  //   engineerName: '',
  //   mobileNumber: '',
  //   expertise: '',
  //   experience: null,
  //   bio: ''
  // };
  ngOnInit(){
    this.getAllEngineers();
    this.getPendingOrders();
  
      }
  getAllEngineers(){
    this.adminServiceService.getAllEngineers().subscribe((data)=>{
      this.allEngineers=data;
      console.log('Enineers',this.allEngineers)
    
    })
    }
    getPendingOrders() {
      this.adminServiceService.getAllPendingOrders().subscribe(
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
  assign(){
  
    console.log("selectedengineerId",this.selectedEngineerId)
    console.log("selectedOrderId",this.selectedOrderId)

    this.adminServiceService.AssignEngineerId(this.selectedOrderId,this.selectedEngineerId).subscribe(()=>{
      Swal.fire('Success!', 'Engineer assigned', 'success');
    });

   
  }
}


// Basic Message:

// Swal.fire('Hello, world!');
// Success Message:

// Swal.fire('Success!', 'Engineer assigned', 'success');


// Error Message:

// Swal.fire('Error!', 'Something went wrong', 'error');


// Warning Message:

// Swal.fire('Warning!', 'Please be cautious', 'warning');
// Info Message:

// Swal.fire('Info', 'This is an informative message', 'info');



// Question Message:

// Swal.fire('Question', 'Do you want to proceed?', 'question');


// Swal.fire({
//   title: 'Custom HTML',
//   html: '<strong>This is a custom HTML message</strong>',
//   icon: 'info',
// });
// Confirmation with Buttons:


// Swal.fire({
//   title: 'Are you sure?',
//   text: 'You won\'t be able to revert this!',
//   icon: 'warning',
//   showCancelButton: true,
//   confirmButtonText: 'Yes, delete it!',
//   cancelButtonText: 'No, cancel!',
// }).then((result) => {
//   if (result.isConfirmed) {
//     Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
//   } else if (result.dismiss === Swal.DismissReason.cancel) {
//     Swal.fire('Cancelled', 'Your file is safe :)', 'info');
//   }
// });
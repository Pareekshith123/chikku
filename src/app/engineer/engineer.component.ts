import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.css']
})
export class EngineerComponent {
  assign(){
  

    Swal.fire('Success!', 'Engineer assigned', 'success');

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
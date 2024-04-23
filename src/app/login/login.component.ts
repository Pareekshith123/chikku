import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mobileNumber: string = '';
  otp: string = '';
  token:any={};

 

  constructor(private authService: AdminServiceService,private router: Router) {}
  
  sendOtp() {
this.authService.getOtp(this.mobileNumber).subscribe(()=>{
  Swal.fire(`OTP sent to ${this.mobileNumber}`);
});
    
  }

  loginWithOtp() {
    this.authService.getAuthenticateUser(this.mobileNumber,this.otp).subscribe((res)=>{
       this.token=res;
    console.log("token",this.token)
    localStorage.setItem('token', this.token.accessToken);

      Swal.fire(`Loggin successfull`);

      this.router.navigate(['/']);
    })
   
  }

  login(): void {
   
   
    
    
      Swal.fire("successfully logged in",'success')
   
  
  
}}
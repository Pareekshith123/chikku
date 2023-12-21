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
  email = '';
  password = '';
 

  constructor(private authService: AdminServiceService,private router: Router) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe((response) => {
      // Assuming the API returns a token in the response
      const token = response.accessToken;
      console.log("token",token)
      // Store the token in local storage
      localStorage.setItem('token', token);
    
    
      Swal.fire("successfully logged in",'success')
      this.email = '';
      this.password = '';
      this.router.navigate(['/']);
      // Do something with the token, like redirecting to another page
    });
  }
}
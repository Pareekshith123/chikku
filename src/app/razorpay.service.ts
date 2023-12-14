// razorpay.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {
  private apiUrl = 'https://api.razorpay.com/v1/invoices?type=invoice';  // Remove the type parameter from the URL
  private Username = 'rzp_test_E2v6chvoceMDTP';
  private Password = 'QYiOBJnFr6EvSlxXVATqeL7H';  

  constructor(private http: HttpClient) { }

  getInvoices(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic' + btoa(`${this.Username}:${this.Password}`)
    });

    console.log('API URL:', this.apiUrl);

    return this.http.get(this.apiUrl, { headers: headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching invoices:', error);
        return throwError(error);
      })
    );
  }
}

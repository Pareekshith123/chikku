import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private baseUrl = 'https://staging.chikku4u.com/chikku'; 
  
  constructor(private http: HttpClient) { }
authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlZWtzaGl0aHRnQGdtYWlsLmNvbSIsImlhdCI6MTcwMjUzNzI0Nn0.hhe4JojYX8E6RuCwf0Mzu1jI6HWYbGffAv-Zcb8pkDU';
  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/category/getAllCategories`);
  }

  addCategory(requestData: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    // headers.append('Authorization', 'Bearer ' + yourAccessToken); // If you have an authorization token, you can include it here

    return this.http.post(`${this.baseUrl}/api/category/createCategory`, requestData, { headers });
  }
   getSubcategories(id:any){
    return this.http.get(`${this.baseUrl}/api/category/getCategoryById?categoryId=${id}`);

   }
   addSubcategory(id:any,newCategory:any){
    const headers = new HttpHeaders();
    return this.http.post(`${this.baseUrl}/api/subCategory/createSubCategory`,newCategory,{ headers });
   
   }
   addService(serviceform:any){
    const headers = new HttpHeaders();
    return this.http.post(`${this.baseUrl}/api/service/createService`,serviceform,{ headers });
   
   }
   deleteSubcategory(id:any){
   return this.http.delete(`${this.baseUrl}/api/subCategory/deleteSubCategory?subCategoryId=${id}`);
   }
  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/api/category/deleteCategory?categoryId=${id}`);
  }
  getAllSubcategory(){
    return this.http.get(`${this.baseUrl}/api/subCategory/getAllSubCategories`);

  }
  getAllServices(){
    return this.http.get(`${this.baseUrl}/api/service/getAllServices`);

  }
  getAllUsers(){
    return this.http.get(`${this.baseUrl}/api/user/getAllUsers`);

  }
  getAllServicesBySubCategoryId(id: number){
    return this.http.get(`${this.baseUrl}/api/service/getServicesBySubCategory?subCategoryId=${id}`);

  }
  getAllServicesByServiceId(id: number){
    return this.http.get(`${this.baseUrl}/api/service/getServiceById?serviceId=${id}`);

  }
  getAllOrders(): Observable<any> {
    // Get the token from wherever you store it (e.g., local storage, a service, etc.)
    // const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlZWtzaGl0aHRnQGdtYWlsLmNvbSIsImlhdCI6MTcwMjQ0NzQ2MH0.VC_lmQo_0s_dmP0_rYpRlW1kZWkdzPCeXxZy_npFziw';

    // Set the authorization header with the Bearer token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });

    // Include the headers in the HTTP request
    return this.http.get(`${this.baseUrl}/api/admin/getAllOrders`, { headers });
  }
  getAllPendingOrders(): Observable<any> {
    // Get the token from wherever you store it (e.g., local storage, a service, etc.)
    // const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlZWtzaGl0aHRnQGdtYWlsLmNvbSIsImlhdCI6MTcwMjQ0NzQ2MH0.VC_lmQo_0s_dmP0_rYpRlW1kZWkdzPCeXxZy_npFziw';

    // Set the authorization header with the Bearer token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });

    // Include the headers in the HTTP request
    return this.http.get(`${this.baseUrl}/api/admin/getAllPendingOrders`, { headers });
  }
getAllEngineers(): Observable<any> {
    // Get the token from wherever you store it (e.g., local storage, a service, etc.)
    // const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlZWtzaGl0aHRnQGdtYWlsLmNvbSIsImlhdCI6MTcwMjQ0NzQ2MH0.VC_lmQo_0s_dmP0_rYpRlW1kZWkdzPCeXxZy_npFziw';

    // Set the authorization header with the Bearer token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });

    // Include the headers in the HTTP request
    return this.http.get(`${this.baseUrl}/api/engineer/getAllEngineers`, { headers });
  }
getAllCompletedOrders(): Observable<any> {
    // Get the token from wherever you store it (e.g., local storage, a service, etc.)
    // const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlZWtzaGl0aHRnQGdtYWlsLmNvbSIsImlhdCI6MTcwMjQ0NzQ2MH0.VC_lmQo_0s_dmP0_rYpRlW1kZWkdzPCeXxZy_npFziw';

    // Set the authorization header with the Bearer token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });

    // Include the headers in the HTTP request
    return this.http.get(`${this.baseUrl}/api/admin/getAllCompletedOrders`, { headers });
  }
getAllPaylaterOrders(): Observable<any> {
    // Get the token from wherever you store it (e.g., local storage, a service, etc.)
    // const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlZWtzaGl0aHRnQGdtYWlsLmNvbSIsImlhdCI6MTcwMjQ0NzQ2MH0.VC_lmQo_0s_dmP0_rYpRlW1kZWkdzPCeXxZy_npFziw';

    // Set the authorization header with the Bearer token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });

    // Include the headers in the HTTP request
    return this.http.get(`${this.baseUrl}/api/admin/getAllPayLaterOrders`, { headers });
  }
deleteEngineer(id:any): Observable<any> {
    // Get the token from wherever you store it (e.g., local storage, a service, etc.)
    // const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlZWtzaGl0aHRnQGdtYWlsLmNvbSIsImlhdCI6MTcwMjQ0NzQ2MH0.VC_lmQo_0s_dmP0_rYpRlW1kZWkdzPCeXxZy_npFziw';

    // Set the authorization header with the Bearer token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });

    // Include the headers in the HTTP request
    return this.http.delete(`${this.baseUrl}/api/engineer/deleteEngineer?engineerId=${id}`, { headers });
  }
GetEngineerByEngineerId(id:any): Observable<any> {
    // Get the token from wherever you store it (e.g., local storage, a service, etc.)
    // const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlZWtzaGl0aHRnQGdtYWlsLmNvbSIsImlhdCI6MTcwMjQ0NzQ2MH0.VC_lmQo_0s_dmP0_rYpRlW1kZWkdzPCeXxZy_npFziw';

    // Set the authorization header with the Bearer token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });

    // Include the headers in the HTTP request
    return this.http.get(`${this.baseUrl}/api/engineer/getEngineerById?engineerId=${id}`, { headers });
  }
  assignEngineerId(orderId: any, engineerId: any): Observable<any> {
    // Set the authorization header with the Bearer token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });

    // Include the headers in the HTTP request options
    const options = { headers: headers };

    // Use options to include headers in the HTTP request
    const body = {
      orderId: orderId,
      engineerId: engineerId
    };

    return this.http.post(`${this.baseUrl}/chikku/api/admin/assignEngineer`, body, options);
  }

  getAllInvoices(){
    return this.http.get(`http://localhost:8080/api/Razerpay/fetch-invoices`);

  }
  // getAllInvoices(): Observable<any> {
  //   // Replace 'your-username' and 'your-password' with your actual credentials
  //   const Username = 'rzp_test_E2v6chvoceMDTP';
  //   const Password = 'QYiOBJnFr6EvSlxXVATqeL7H';

  //   // Create the Basic Authentication header
  //   const headers = new HttpHeaders({
  //     'Authorization': 'Basic ' + btoa(Username + ':' + Password)
  //   });

  //   // Make the HTTP request with the headers
  //   return this.http.get(`https://api.razorpay.com/v1/invoices?type=invoice`, { headers });
  // }
  createEngineer(engineer:any): Observable<any>{
    const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlZWtzaGl0aHRnQGdtYWlsLmNvbSIsImlhdCI6MTcwMjQ0NzQ2MH0.VC_lmQo_0s_dmP0_rYpRlW1kZWkdzPCeXxZy_npFziw';

    // Set the authorization header with the Bearer token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    return this.http.post(`${this.baseUrl}/api/engineer/createEngineer`,engineer,{headers});
  }
  updateEngineer(engineer:any): Observable<any>{
    // const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlZWtzaGl0aHRnQGdtYWlsLmNvbSIsImlhdCI6MTcwMjQ0NzQ2MH0.VC_lmQo_0s_dmP0_rYpRlW1kZWkdzPCeXxZy_npFziw';

    // Set the authorization header with the Bearer token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.post(`${this.baseUrl}/api/engineer/updateEngineer`,engineer,{headers});
  }
  updateServices(serviceForm:any){
    return this.http.put(`${this.baseUrl}/api/service/updateService`,serviceForm);
  }
  updateSubcategory(newCategory:any){
    return this.http.put(`${this.baseUrl}/api/subCategory/updateSubCategory`,newCategory);
  }
  updateCategory(newCategory:any){
    return this.http.put(`${this.baseUrl}/api/category/updateCategory`,newCategory);
  }
  deleteServicebyId(id:any){
    return this.http.delete(`${this.baseUrl}/api/service/deleteService?serviceId=${id}`);
  }
}

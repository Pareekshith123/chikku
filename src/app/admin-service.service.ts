import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, identity } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private baseUrl = 'chikkulive'; 
  authToken: any;
  
  constructor(private http: HttpClient) { }
// authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlZWtzaGl0aHRnQGdtYWlsLmNvbSIsImlhdCI6MTcwMzA0OTI0OX0.JgLNuFRfO8JB5ff7K7_QQ13UrLKF0VAtT863H7Hnm1g';
login(email: string, password: string): Observable<any> {
  const params = new HttpParams()
    .set('email', email)
    .set('password', password);

  return this.http.get(this.baseUrl+`/login?emailId=${email}&password=${password}`);
}  


getCategories() {
    return this.http.get(this.baseUrl+'/api/category/getAllCategories');
  }

  addCategory(requestData: any): Observable<any> {
    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    // headers.append('Authorization', 'Bearer ' + yourAccessToken); // If you have an authorization token, you can include it here

    return this.http.post(`${this.baseUrl}/api/category/createCategory`, requestData);
  }
   getSubcategories(id:any){
    return this.http.get(`${this.baseUrl}/api/subCategory/getSubCategoriesByCategory?categoryId=${id}`);

   }
   addSubcategory(id:any,newCategory:any){
    const headers = new HttpHeaders();
    return this.http.post(`${this.baseUrl}/api/subCategory/createSubCategory`,newCategory,{ headers });
   
   }
   addService(serviceform:any){
    // const headers = new HttpHeaders();
    return this.http.post(`${this.baseUrl}/api/service/createService`,serviceform);
   
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
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${this.authToken}`
    // });

    // Include the headers in the HTTP request
    return this.http.get(`${this.baseUrl}/api/admin/getAllOrders`,);
  }
  getAllPendingOrders(): Observable<any> {
    // Get the token from wherever you store it (e.g., local storage, a service, etc.)
    // const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlZWtzaGl0aHRnQGdtYWlsLmNvbSIsImlhdCI6MTcwMjQ0NzQ2MH0.VC_lmQo_0s_dmP0_rYpRlW1kZWkdzPCeXxZy_npFziw';

    // Set the authorization header with the Bearer token
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${this.authToken}`
    // });

    // Include the headers in the HTTP request
    return this.http.get(`${this.baseUrl}/api/admin/getAllPlacedOrders`);
  }
getAllEngineers(): Observable<any> {
    // Get the token from wherever you store it (e.g., local storage, a service, etc.)
    // const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlZWtzaGl0aHRnQGdtYWlsLmNvbSIsImlhdCI6MTcwMjQ0NzQ2MH0.VC_lmQo_0s_dmP0_rYpRlW1kZWkdzPCeXxZy_npFziw';

    // Set the authorization header with the Bearer token
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${this.authToken}`
    // });

    // Include the headers in the HTTP request
    return this.http.get(`${this.baseUrl}/api/engineer/getAllEngineers`);
  }
getAllCompletedOrders(): Observable<any> {
    // Get the token from wherever you store it (e.g., local storage, a service, etc.)
    // const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlZWtzaGl0aHRnQGdtYWlsLmNvbSIsImlhdCI6MTcwMjQ0NzQ2MH0.VC_lmQo_0s_dmP0_rYpRlW1kZWkdzPCeXxZy_npFziw';

    // Set the authorization header with the Bearer token
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${this.authToken}`
    // });

    // Include the headers in the HTTP request
    return this.http.get(`${this.baseUrl}/api/admin/getAllCompletedOrders`);
  }
getAllCancelledOrders(): Observable<any> {
    // Get the token from wherever you store it (e.g., local storage, a service, etc.)
    // const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlZWtzaGl0aHRnQGdtYWlsLmNvbSIsImlhdCI6MTcwMjQ0NzQ2MH0.VC_lmQo_0s_dmP0_rYpRlW1kZWkdzPCeXxZy_npFziw';

    // Set the authorization header with the Bearer token
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${this.authToken}`
    // });

    // Include the headers in the HTTP request
    return this.http.get(`${this.baseUrl}/api/admin/getAllCancelledOrders`);
  }
  getOtp(mobileNumber:string){
  return this.http.get(`${this.baseUrl}/login?mobileNumber=${mobileNumber}`)
  }
  getAuthenticateUser(mobileNumber:string,otp:string){
    return this.http.get(`${this.baseUrl}/authenticateUser?mobileNumber=${mobileNumber}&otp=${otp}`)
  }
getAllPaylaterOrders(): Observable<any> {
    // Get the token from wherever you store it (e.g., local storage, a service, etc.)
    // const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlZWtzaGl0aHRnQGdtYWlsLmNvbSIsImlhdCI6MTcwMjQ0NzQ2MH0.VC_lmQo_0s_dmP0_rYpRlW1kZWkdzPCeXxZy_npFziw';

    // // Set the authorization header with the Bearer token
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${this.authToken}`
    // });

    // Include the headers in the HTTP request
    return this.http.get(`${this.baseUrl}/api/admin/getAllPayLaterOrders`);
  }
deleteEngineer(id:any): Observable<any> {
    // Get the token from wherever you store it (e.g., local storage, a service, etc.)
    // const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlZWtzaGl0aHRnQGdtYWlsLmNvbSIsImlhdCI6MTcwMjQ0NzQ2MH0.VC_lmQo_0s_dmP0_rYpRlW1kZWkdzPCeXxZy_npFziw';

    // Set the authorization header with the Bearer token
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${this.authToken}`
    // });

    // Include the headers in the HTTP request
    return this.http.delete(`${this.baseUrl}/api/engineer/deleteEngineer?engineerId=${id}`);
  }
GetEngineerByEngineerId(id:any): Observable<any> {
    // Get the token from wherever you store it (e.g., local storage, a service, etc.)
    // const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlZWtzaGl0aHRnQGdtYWlsLmNvbSIsImlhdCI6MTcwMjQ0NzQ2MH0.VC_lmQo_0s_dmP0_rYpRlW1kZWkdzPCeXxZy_npFziw';

    // Set the authorization header with the Bearer token
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${this.authToken}`
    // });

    // Include the headers in the HTTP request
    return this.http.get(`${this.baseUrl}/api/engineer/getEngineerById?engineerId=${id}`);
  }
  assignEngineerId(orderId: any, engineerId: any): Observable<any> {
    // Set the authorization header with the Bearer token
    const headers = new HttpHeaders({
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5MTEzOTY0MTUzIiwiaWF0IjoxNzA0NDMyNjQ0fQ.sgFMKPk2NPDWlujfOUl_7p5oXSwMoX4E6LXMaiqkr5Q`
    });
  
    // Include the headers in the HTTP request options
    const options = { headers: headers };
  
    // Use options to include headers in the HTTP request
    const body = {
      orderId: orderId,
      engineerId: engineerId
    };
  
    return this.http.post(`${this.baseUrl}/api/admin/assignEngineer`, body, options);
  }
  
  // getAllInvoices(): Observable<any> {
    getAllInvoices(): Observable<any>{
      return this.http.get(`${this.baseUrl}/api/admin/getAllOrders`);
  
    }
    getInvoiceByInvoiceId(id:any): Observable<any>{
      return this.http.get(`${this.baseUrl}/api/order/getOrderById?orderId=${id}`);
  
    }
    getInvoiceOrderById(id:any):Observable<any>{
      return this.http.get(`${this.baseUrl}/api/order/getOrderDetailsById?orderId=${id}`);
    }
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

    // Set the authorization header with the Bearer token
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${this.authToken}`
    // });
    return this.http.post(`${this.baseUrl}/api/engineer/createEngineer`,engineer);
  }

  updateEngineer(engineer:any): Observable<any>{
    // const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlZWtzaGl0aHRnQGdtYWlsLmNvbSIsImlhdCI6MTcwMjQ0NzQ2MH0.VC_lmQo_0s_dmP0_rYpRlW1kZWkdzPCeXxZy_npFziw';

    // Set the authorization header with the Bearer token
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${this.authToken}`
    // });
    return this.http.post(`${this.baseUrl}/api/engineer/updateEngineer`,engineer);
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
  getAllAssignedOrders(){
    return this.http.get(`${this.baseUrl}/api/admin/getAllAssignedOrders`);
  
  }
  chat(question: string) {
    return this.http.post('https://chikk-chatbot-app.onrender.com/api/ask', { question: question });
    // return this.http.post('http://localhost:8080/chat', "pareekshith" );
  
}}

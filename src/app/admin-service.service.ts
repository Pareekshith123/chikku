import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private baseUrl = 'https://chicoo.in:4582/service/api'; 

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/category/`);
  }

  addCategory(formData: FormData): Observable<any> {
    const headers = new HttpHeaders();
    // headers.append('Authorization', 'Bearer ' + yourAccessToken); // If you have an authorization token, you can include it here
  
    return this.http.post(`${this.baseUrl}/category/add`, formData, { headers });
  }
   getSubcategories(id:any){
    return this.http.get(`${this.baseUrl}/category/${id}`);

   }
   addSubcategory(id:any,newCategory:any){
    const headers = new HttpHeaders();
    return this.http.post(`${this.baseUrl}/create/category/${id}`,newCategory,{ headers });
   
   }
  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/category/${id}`);
  }
}

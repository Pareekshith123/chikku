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
    return this.http.get(`https://staging.chikku4u.com/chikku/api/category/getAllCategories`);
  }

  addCategory(requestData: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    // headers.append('Authorization', 'Bearer ' + yourAccessToken); // If you have an authorization token, you can include it here

    return this.http.post(`https://staging.chikku4u.com/chikku/api/category/createCategory`, requestData, { headers });
  }
   getSubcategories(id:any){
    return this.http.get(`https://staging.chikku4u.com/chikku/api/category/getCategoryById?categoryId=${id}`);

   }
   addSubcategory(id:any,newCategory:any){
    const headers = new HttpHeaders();
    return this.http.post(`https://staging.chikku4u.com/chikku/api/subCategory/createSubCategory`,newCategory,{ headers });
   
   }
   addService(serviceform:any){
    const headers = new HttpHeaders();
    return this.http.post(`https://staging.chikku4u.com/chikku/api/service/createService`,serviceform,{ headers });
   
   }
   deleteSubcategory(id:any){
   return this.http.delete(`https://staging.chikku4u.com/chikku/api/subCategory/deleteSubCategory?subCategoryId=${id}`);
   }
  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`https://staging.chikku4u.com/chikku/api/category/deleteCategory?categoryId=${id}`);
  }
  getAllSubcategory(){
    return this.http.get(`https://staging.chikku4u.com/chikku/api/subCategory/getAllSubCategories`);

  }
  getAllServices(){
    return this.http.get(`https://staging.chikku4u.com/chikku/api/service/getAllServices`);

  }
  getAllServicesBySubCategoryId(id: number){
    return this.http.get(`https://staging.chikku4u.com/chikku/api/service/getServicesBySubCategory?subCategoryId=${id}`);

  }
  getAllServicesByServiceId(id: number){
    return this.http.get(`https://staging.chikku4u.com/chikku/api/service/getServiceById?serviceId=${id}`);

  }
  createEngineer(engineer:any){
    return this.http.post(`https://staging.chikku4u.com/chikku/api/engineer/createEngineer`,engineer);
  }
  updateServices(serviceForm:any){
    return this.http.put(`https://staging.chikku4u.com/chikku/api/service/updateService`,serviceForm);
  }
  deleteServicebyId(id:any){
    return this.http.get(`https://staging.chikku4u.com/chikku/api/service/deleteService?serviceId=${id}`);

  }
}

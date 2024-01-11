// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  token:any=''
  constructor(private router: Router) {}
  public isLoggedIn(){
    let tokenStr = localStorage.getItem("token");
    if (tokenStr == undefined || tokenStr == '' || tokenStr==null) {
      return false;
    } else {
      return true;
    }
  }
ngonInIt(){
    this.token=localStorage.getItem('token')

}
  canActivate(): boolean {
    if (this.isLoggedIn()){
        return true;
    }
  this.router.navigate(['/login'])
return false;
  }
}

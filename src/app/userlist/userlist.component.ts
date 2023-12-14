import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent  {
getAllUsers:any=[];

 constructor(private adminservice:AdminServiceService){

 }
  
ngOnInit(): void {

this.getAlluser();

}

getAlluser(){
   this.adminservice.getAllUsers().subscribe((data)=>{
    this.getAllUsers=data;
   })
}
getTruncatedPassword(password: string): string {
  const maxLength = 7;
  return password.length > maxLength ? password.substring(0, maxLength) + '...' : password;
}


}

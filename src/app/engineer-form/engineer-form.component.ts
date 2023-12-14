// engineer-form.component.ts
import { Component,OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-engineer-form',
  templateUrl: './engineer-form.component.html',
  styleUrls: ['./engineer-form.component.css']
})
export class EngineerFormComponent {
createEngineer() {
  this.isUpdateTrue=false;
  this.engineer = {
    engineerId: 0,
    engineerName: '',
    mobileNumber: '',
    expertise: '',
    experience: null,
    bio: ''
  };
throw new Error('Method not implemented.');
}
onUpdate() {
  console.log("up",this.engineer)
  this.engineerService.updateEngineer(this.engineer).subscribe(()=>{
    Swal.fire("Updated Succesfully")
  },(error)=>{
    console.log(error)
  }
  )
  this.getAllEngineers();
throw new Error('Method not implemented.');
}
  allEngineers:any=[];
  isUpdateTrue:boolean=false;
  constructor(private engineerService: AdminServiceService) {}


  ngOnInit(){
this.getAllEngineers();
  }

  engineer: any = {
    engineerId:0,
    engineerName: '',
    mobileNumber: '',
    expertise: '',
    experience: null,
    bio: ''
  };

  onSubmit() {
    console.log(this.engineer)
    this.engineerService.createEngineer(this.engineer).subscribe(
      () => {
        console.log('Engineer added successfully');
        // Optionally, reset the form or clear input fields
        this.engineer = {
          engineerId:0,
          engineerName: '',
          mobileNumber: '',
          expertise: '',
          experience: null,
          bio: ''
        };
        Swal.fire("created successfully successfully")
        this.getAllEngineers();
      },
      (error) => {
        console.error('Error adding engineer:', error);
      }
    );
    
  }
  getAllEngineers(){
  this.engineerService.getAllEngineers().subscribe((data)=>{
    this.allEngineers=data;
    console.log('Enineers',this.allEngineers)
  
  })
  }
  editEngineer(engineerId: number){
    this.isUpdateTrue=true
   this.engineerService.GetEngineerByEngineerId(engineerId).subscribe((data)=>{
    this.engineer=data;
    console.log("edit this",this.engineer)
   });

  }

  deleteEngineer(engineerId: number){
    console.log("del id",engineerId)
    this.engineerService.deleteEngineer(engineerId).subscribe(()=>{
      Swal.fire("deleted successfully")
      console.log("deleted succesfully")
      this.getAllEngineers();
    });
  }
}

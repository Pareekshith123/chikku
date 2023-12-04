// engineer-form.component.ts
import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-engineer-form',
  templateUrl: './engineer-form.component.html',
  styleUrls: ['./engineer-form.component.css']
})
export class EngineerFormComponent {
  constructor(private engineerService: AdminServiceService) {}

  engineer: any = {
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
          engineerName: '',
          mobileNumber: '',
          expertise: '',
          experience: null,
          bio: ''
        };
      },
      (error) => {
        console.error('Error adding engineer:', error);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-engineer-form',
  templateUrl: './engineer-form.component.html',
  styleUrls: ['./engineer-form.component.css']
})
export class EngineerFormComponent implements OnInit {
  displayedColumns: string[] = ['engineerName', 'mobileNumber', 'expertise', 'experience', 'actions', 'addEngineer'];

  createEngineer() {
    this.isUpdateTrue = false;
    this.engineer = {
      engineerId: 0,
      engineerName: '',
      mobileNumber: '',
      expertise: '',
      experience: null,
      bio: ''
    };
  }

  onUpdate() {
    console.log("up", this.engineer);
    this.engineerService.updateEngineer(this.engineer).subscribe(() => {
      Swal.fire("Updated Successfully");
      this.getAllEngineers();
    }, (error) => {
      console.error(error);
    });
  }

  allEngineers: any[] = [];
  isUpdateTrue: boolean = false;

  constructor(private engineerService: AdminServiceService) { }

  ngOnInit() {
    this.getAllEngineers();
  }

  engineer: any = {
    engineerId: 0,
    engineerName: '',
    mobileNumber: '',
    expertise: '',
    experience: null,
    bio: ''
  };

  onSubmit() {
    console.log(this.engineer);

    if (
      this.engineer.engineerName !== '' &&
      this.engineer.mobileNumber !== '' &&
      this.engineer.expertise !== '' &&
      this.engineer.experience !== null &&
      this.engineer.bio !== ''
    ) {
      this.engineerService.createEngineer(this.engineer).subscribe(
        () => {
          console.log('Engineer added successfully');
          this.engineer = {
            engineerId: 0,
            engineerName: '',
            mobileNumber: '',
            expertise: '',
            experience: null,
            bio: '',
          };
          Swal.fire('Created successfully');
          this.getAllEngineers();
        },
        (error) => {
          console.error('Error adding engineer:', error);
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        text: 'Please fill all the fields',
      });
    }
  }

  getAllEngineers() {
    this.engineerService.getAllEngineers().subscribe((data) => {
      this.allEngineers = data;
      console.log('Engineers', this.allEngineers);
    });
  }

  editEngineer(engineerId: number) {
    this.isUpdateTrue = true;
    this.engineerService.GetEngineerByEngineerId(engineerId).subscribe((data) => {
      this.engineer = data;
      console.log("edit this", this.engineer);
    });
  }

  deleteEngineer(engineerId: number) {
    console.log("del id", engineerId);
    this.engineerService.deleteEngineer(engineerId).subscribe(() => {
      Swal.fire("Deleted successfully");
      console.log("Deleted successfully");
      this.getAllEngineers();
    });
  }
}

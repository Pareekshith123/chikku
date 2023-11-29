import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  edit: boolean = false;
  UserName = "Pareekshith";
  isMobile: boolean = false;
  
  profiledown:boolean= false;
  isDropdownVisible: boolean = false;
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    this.checkIsMobile();
    window.addEventListener('resize', () => {
      this.checkIsMobile();
     
    });
  }

  checkIsMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
  Profiledown(){
   this.profiledown=true;
   console.log(this.profiledown,"his is that");
  }
  closeprofile(){
    this.profiledown=false;
  }
  

toggleProfile() {
  this.profiledown = !this.profiledown;
}

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

  editProfile() {
      this.edit = true;
  }

  goBack() {
      this.edit = false;
  }
  userProfile: any = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    // Add more fields as needed
  };

  isEditProfileModalOpen = false;



  openEditProfileModal() {
    this.isEditProfileModalOpen = true;
  }

  closeEditProfileModal() {
    this.isEditProfileModalOpen = false;
  }

  saveProfile(updatedProfile: any) {
    // Update the user profile with the changes
    this.userProfile = { ...this.userProfile, ...updatedProfile };
    
    // Close the modal after saving changes
    this.closeEditProfileModal();
  }
  
}

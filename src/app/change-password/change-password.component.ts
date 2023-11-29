import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  
  @Output() onClose = new EventEmitter<void>();
  @Output() onPasswordChange = new EventEmitter<{ currentPassword: string, newPassword: string }>();

  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
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
  closePopup() {
    this.onClose.emit();
  }

  changePassword() {
    if (this.newPassword === this.confirmPassword) {
      this.onPasswordChange.emit({ currentPassword: this.currentPassword, newPassword: this.newPassword });
      this.closePopup();
    } else {
      // Handle password mismatch error
      console.error("New Password and Confirm Password do not match.");
    }
  }
}

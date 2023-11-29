import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
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
}

import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
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

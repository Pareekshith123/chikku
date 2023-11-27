// admin.component.ts
import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
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
  
  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
}

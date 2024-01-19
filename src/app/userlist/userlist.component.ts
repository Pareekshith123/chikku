import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
interface Users {
  firstName: string;
  lastName: string;
  emailId: string;
  mobileNumber: number;
}

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: Users[] = [];
  page = 1;
  pageSize = 7;
  maxPages = 8;
  displayedColumns: string[] = ['userName', 'emailId', 'mobileNumber'];
  dataSource = new MatTableDataSource<Users>([]); // Initialize with an empty array

  constructor(private adminservice: AdminServiceService,private router:Router) {}

  getAllUsers() {
    this.adminservice.getAllUsers().subscribe((data) => {
      this.users = data as Users[]; 
      this.dataSource = new MatTableDataSource<Users>(this.users);
      console.log("users", this.users);
    });
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  get totalPages(): number {
    return Math.ceil(this.users.length / this.pageSize);
  }
  back(){
    this.router.navigate(['/']);
  }
  get pages(): number[] {
    const total = this.totalPages;
    const currentPage = this.page;
    const maxPages = this.maxPages;

    if (total <= maxPages) {
      return Array.from({ length: total }, (_, i) => i + 1);
    } else {
      const halfMaxPages = Math.floor(maxPages / 2);
      const startPage = Math.max(currentPage - halfMaxPages, 1);
      const endPage = Math.min(startPage + maxPages - 1, total);

      return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    }
  }

  setPage(event: PageEvent): void {
    if (event.pageIndex !== undefined) {
      this.page = event.pageIndex + 1;
    }
  }
  
}

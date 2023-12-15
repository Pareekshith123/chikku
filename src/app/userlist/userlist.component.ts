import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

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

  constructor(private adminservice: AdminServiceService) {}

  getAllUsers() {
    this.adminservice.getAllUsers().subscribe((data) => {
      this.users = data as Users[]; 
      console.log("users", this.users);
    });
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  get totalPages(): number {
    return Math.ceil(this.users.length / this.pageSize);
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

  setPage(newPage: number): void {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.page = newPage;
    }
  }
}

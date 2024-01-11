import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin-subcategory',
  templateUrl: './admin-subcategory.component.html',
  styleUrls: ['./admin-subcategory.component.css']
})
export class AdminSubcategoryComponent implements OnInit {
  categories: any[] = [];
  selectedCategoryId: number = 0;
  subcategories: any[] = [];
  subcategoryData: any = {};
  newSubcategory: any = {};
 

  constructor(private adminServiceService: AdminServiceService) {}

  ngOnInit(): void {
    this.getCategories();
    console.log(this.selectedCategoryId);
    Swal.fire("Add the Subcategories carefully  by selecting Category");
  }

  getCategories(): void {
    this.adminServiceService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  onCategoryChange(): void {
    if (this.selectedCategoryId) {
      console.log(this.selectedCategoryId);
      this.adminServiceService.getSubcategories(this.selectedCategoryId).subscribe((data: any) => {
        this.subcategories = data;
        console.log(data);
      });
    }
  }
 
  onDeleteSubcategory(id: any): void {
    if (confirm('Are you sure you want to delete this subcategory?')) {
      this.adminServiceService.deleteSubcategory(id).subscribe(
        () => {
          console.log('Subcategory deleted successfully');
          this.onCategoryChange();
           // Refresh the subcategories list
        },
        (error) => {
          console.error('Error deleting subcategory:', error);
        }
      );
    }
    window.location.reload();
  }
  
  onSubmit(): void {
    // Include selectedCategoryId in the newSubcategory object
    this.subcategoryData = {
      categoryId: this.selectedCategoryId,
      subCategoryName: this.newSubcategory.subCategoryName, // Corrected property name
      description: this.newSubcategory.description
    };
  
    if (this.selectedCategoryId && this.newSubcategory.subCategoryName && this.newSubcategory.description) {
      this.adminServiceService.addSubcategory(this.selectedCategoryId, this.subcategoryData).subscribe(
        () => {
          console.log('Subcategory added successfully');
          this.subcategoryData = {};
          this.newSubcategory = {}; 
          this.onCategoryChange(); 
        },
        (error) => {
          console.error('Error adding subcategory:', error);
        }
      );
    } else {
      console.error('Please fill in all the required fields');
      // You might want to show a user-friendly error message here
    }
  }
  
}

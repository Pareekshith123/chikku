import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-subcategory',
  templateUrl: './admin-subcategory.component.html',
  styleUrls: ['./admin-subcategory.component.css']
})
export class AdminSubcategoryComponent implements OnInit {
  categories: any[] = [];
  selectedCategoryId: number = 0;
  subcategories: any[] = [];

  newSubcategory: any = {};
onDeleteSubcategory: any;

  constructor(private adminServiceService: AdminServiceService) {}

  ngOnInit(): void {
    this.getCategories();
    console.log(this.selectedCategoryId);
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
        this.subcategories = data.subCategories;
        console.log(data);
      });
     
    }
  }

  onSubmit(): void {
    if (this.selectedCategoryId && this.newSubcategory.name && this.newSubcategory.description) {
      // Assuming addSubcategory method takes the newSubcategory object as the second parameter
      this.adminServiceService.addSubcategory(this.selectedCategoryId, this.newSubcategory).subscribe(
        () => {
          // Handle success, maybe show a success message
          console.log('Subcategory added successfully');
          this.newSubcategory = {}; // Clear the form
          this.onCategoryChange(); // Refresh the subcategories list
        },
        (error) => {
          // Handle error, maybe show an error message
          console.error('Error adding subcategory:', error);
        }
      );
    }
  }
}

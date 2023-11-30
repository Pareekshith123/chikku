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
    console.log(this.selectedCategoryId,this.newSubcategory.name,this.newSubcategory.description)
    if (this.selectedCategoryId && this.newSubcategory.name && this.newSubcategory.description) {
        this.adminServiceService.addSubcategory(this.selectedCategoryId, this.newSubcategory).subscribe(
            () => {
                console.log('Subcategory added successfully');
                this.newSubcategory = {}; // Clear the form
                this.onCategoryChange(); // Refresh the subcategories list
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

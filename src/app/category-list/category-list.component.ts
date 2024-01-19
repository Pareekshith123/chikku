// category-list.component.ts

import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  categoryName: string = '';
  encodeDocument: File | null = null;
  categories: any[] = [];
  newCategory: any = {};

  constructor(private categoryService: AdminServiceService) { }

  deleteCategory(categoryId: any): void {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categoryService.deleteCategory(categoryId).subscribe(
        () => {
          
        },
        (error) => {
          console.error('Error deleting category:', error);
        }
      );
    }
    window.location.reload();
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  onFileChange(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.encodeDocument = fileList[0];
    }
  }

  addCategory(): void {
    if (this.encodeDocument) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
  
        // Create an object to pass variables
        const requestData = {
          categoryName: this.categoryName,
          encodeDocument: base64String
        };
  
        // Call the modified addCategory method with the requestData object
        this.categoryService.addCategory(requestData).subscribe(
          () => {
            this.getCategories();
            this.categoryName = '';
            this.encodeDocument = null;
            window.location.reload();
          },
          (error) => {
            console.error('Error adding category:', error);
          }
        );
      };
  
      reader.readAsDataURL(this.encodeDocument);
    } else {
      console.error('No file selected');
    }
   
  }
}

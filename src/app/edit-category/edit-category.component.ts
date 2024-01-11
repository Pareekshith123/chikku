import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent  {

  categoryName: string = '';
  encodeDocument: File | null = null;
  categories: any[] = [];
  newCategory: any = {};
  selectedCategoryId:any=0;
  constructor(private categoryService: AdminServiceService) { }

  deleteCategory(categoryId: any): void {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categoryService.deleteCategory(categoryId).subscribe(
        () => {
          this.getCategories();
          window.location.reload();
        },
        (error) => {
          console.error('Error deleting category:', error);
        }
      );
    }
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
  onCategoryChange(): void {
    if (this.selectedCategoryId) {
      console.log(this.selectedCategoryId);
      
    }
  }

  addCategory(): void {
    if (this.encodeDocument) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
  
        // Create an object to pass variables
        const requestData = {
          categoryId:this.selectedCategoryId,
          categoryName: this.categoryName,
          encodeDocument: base64String
        };
    console.log(requestData)
 
        this.categoryService.updateCategory(requestData).subscribe(
          () => {
            this.getCategories();
            this.categoryName = '';
            this.encodeDocument = null;
            window.location.reload();
            console.log("the Category is Updated successfully and see home page ")
            console.log(requestData)
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
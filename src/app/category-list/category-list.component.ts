import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  categoryName: string = '';
  file: File | null = null;
  categories: any[] = [];
  newCategory: any = {};
  formData: FormData = new FormData();

  constructor(private categoryService: AdminServiceService) { }
  deleteCategory(categoryId: any): void {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categoryService.deleteCategory(categoryId).subscribe(
        () => {
          this.getCategories();
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
      this.file = fileList[0];
    }
  }
  

  addCategory(): void {
    this.formData = new FormData();
    this.formData.set('categoryName', this.categoryName);
    if (this.file) {
      this.formData.set('file', this.file);
    }
  
    // Remove this line as it's not needed
    // this.newCategory = {
    //   categoryName: this.categoryName,
    //   file: this.file
    // };
  
    // Log the values after the form data has been populated
    console.log('Category Name:', this.categoryName);
    console.log('FormData:', this.formData);
  
    this.categoryService.addCategory(this.formData).subscribe(
      () => {
        this.getCategories();
      
        this.categoryName = '';
        this.file = null;
      },
      (error) => {
        console.error('Error adding category:', error);
      }
    );
  }
 
  
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminServiceService } from '../admin-service.service';

interface Category {
  imageUrl: string;
  categoryName: string;
  description: string;
  categoryId: number;
}
@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  loading = false;
  categories: Category[] = [];
  categoryName = '';
  file: File | null = null;
  categoryForm: FormGroup;

  constructor(
    private adminCategoryService: AdminServiceService,
    private fb: FormBuilder
  ) {
    this.categoryForm = this.fb.group({
      categoryName: ['', Validators.required],
      categoryImage: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this.loading = true;
    this.adminCategoryService.getCategories().subscribe(
      (res: any) => {
        this.categories = res.data;
        this.loading = false;
      },
      error => {
        console.error(error);
        // Handle error as needed
      }
    );
  }

  handleCreateCategory() {
    const formData = new FormData();
    formData.append('categoryName', this.categoryName);
    formData.append('file', this.file as File);

    this.adminCategoryService.addCategory(formData).subscribe(
      () => {
        alert('Category has been added');
        this.fetchCategories();
        this.categoryForm.reset();
      },
      error => {
        console.error('Error creating category:', error);
        alert('Error creating category');
      }
    );
  }

  handleDeleteCategory(categoryId: number) {
    this.adminCategoryService.deleteCategory(categoryId).subscribe(
      () => {
        alert('Category deleted successfully');
        this.fetchCategories();
      },
      error => {
        console.error('Error deleting category:', error);
        alert('Error deleting category');
      }
    );
  }
}

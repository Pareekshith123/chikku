import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editsubcategory',
  templateUrl: './editsubcategory.component.html',
  styleUrls: ['./editsubcategory.component.css']
})
export class EditsubcategoryComponent implements OnInit {
  categories: any[] = [];
  selectedCategoryId: number = 0;
  subcategories: any[] = [];
  subcategoryData: any = {};
  newSubcategory: any = {};
  selectedSubCategoryId:any=0;
  encodeDocument: File | null = null;
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
  onFileChange(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.encodeDocument = fileList[0];
    }
  }
  onCategoryChange(): void {
    if (this.selectedCategoryId) {
      console.log(this.selectedCategoryId);
      this.adminServiceService.getSubcategories(this.selectedCategoryId).subscribe((data: any) => {
        this.subcategories = data;
        console.log("sub",this.subcategories)
        console.log(data);
      },(error) => {
        console.error('Error getting subcategory:', error);
      });
    }
  }
  onSubcategorychange(): void{
    if (this.selectedSubCategoryId) {
      console.log("subid",this.selectedSubCategoryId)
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
    if (this.encodeDocument) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        this.subcategoryData = {
          subCategoryId:this.selectedSubCategoryId,

          categoryId: this.selectedCategoryId,
          subCategoryName: this.newSubcategory.subCategoryName,
          description: this.newSubcategory.description,
          encodeDocument: base64String,
        };

        this.adminServiceService.updateSubcategory(this.subcategoryData).subscribe(
          (res: any) => {
            console.log("Subcategory added successfully", res);
            this.subcategoryData = {};
            this.newSubcategory = {};
            this.onCategoryChange();
          },
          (error) => {
            console.error('Error adding subcategory:', error);
          }
        );
      };

      reader.readAsDataURL(this.encodeDocument);
    } else {
      console.error('No file selected');
    }
  }
  
}

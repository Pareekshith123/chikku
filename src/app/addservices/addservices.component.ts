import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addservices',
  templateUrl: './addservices.component.html',
  styleUrls: ['./addservices.component.css']
})
export class AddservicesComponent {
  categories: any[] = [];
  selectedCategoryId: number = 0;
  subcategories: any[] = [];
  subcategoryData: any = {};
  newSubcategory: any = {};
  serviceTypes:any[] =[];
  selectedServiceTypeId: any = 0;
  selectedSubCategoryId:any=0;
  selectedServiceId:any=0;
 serviceForm:any={}
 encodeDocument: File | null = null;
  constructor(private adminServiceService: AdminServiceService) {}

  ngOnInit(): void {
    this.getCategories();
  

    this.getAllServiceType();
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
      console.log("selectedCategoryId",this.selectedCategoryId);
      this.adminServiceService.getSubcategories(this.selectedCategoryId).subscribe((data: any) => {
        this.subcategories = data;
        console.log(data);
      });
    }
  }
  onSubcategorychange(): void{
    if (this.selectedSubCategoryId) {
      console.log("selectedSubCategoryId",this.selectedSubCategoryId)
    }
  }

  onDeleteSubcategory(id: any): void {
    if (confirm('Are you sure you want to delete this subcategory?')) {
      this.adminServiceService.deleteSubcategory(id).subscribe(
        () => {
          console.log('Subcategory deleted successfully');
          this.onCategoryChange(); // Refresh the subcategories list
        },
        (error) => {
          console.error('Error deleting subcategory:', error);
        }
      );
    }
  }
  onServiceTypechange(){
    if (this.selectedServiceTypeId) {
      console.log("serviceTypeId",this.selectedServiceTypeId)
    }
console.log(this.serviceForm);    
  }
  serviceSubmit(): void {
    if (this.encodeDocument) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
  
        // Create an object to pass variables
        this.serviceForm = {
          subCategoryId: this.selectedSubCategoryId,
          serviceId:this.selectedServiceId,
           serviceName: this.serviceForm.serviceName,
           serviceTypeId: this.selectedServiceTypeId, // Assign selectedServiceTypeId here
           description: this.serviceForm.description,
          bannerUrl:this.serviceForm.bannerUrl,
           price:this.serviceForm.price,

           warrentyDuration:this.serviceForm.warrentyDuration,
           encodeDocument:base64String
         };
  
        // Call the modified addCategory method with the requestData object
        this.adminServiceService.addService(this.serviceForm).subscribe(
          (res:any) => {
         console.log(res)
            this.serviceForm={};
            Swal.fire("service added successfully")
            window.location.reload();
          },
          (error) => {
            console.error('Error adding service:', error);
          }
        );
      };
  
      reader.readAsDataURL(this.encodeDocument);
    } else {
      console.error('No file selected');
    }
  }
  serviceSubmit1(){
    if (this.encodeDocument) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
  
        // Create an object to pass variables
        this.serviceForm = {
          subCategoryId: this.selectedSubCategoryId,
           serviceName: this.serviceForm.serviceName, // Corrected property name
           description: this.serviceForm.description,
           price:this.serviceForm.price,
           serviceTypeId:this.selectedServiceId,

           warrentyDuration:this.serviceForm.warrentyDuration,
           encodeDocument:base64String
         };
         console.log(this.serviceForm)
  
        // Call the modified addCategory method with the requestData object
        // this.adminServiceService.addService(this.serviceForm).subscribe(
        //   (res:any) => {
        //  console.log(res)
        //     this.serviceForm={};
        //   },
        //   (error) => {
        //     console.error('Error adding category:', error);
        //   }
        // );
      };
  
      reader.readAsDataURL(this.encodeDocument);
    } 
    
  }
  getAllServiceType() {
    this.adminServiceService.getAllServiceTypes().subscribe((res: any) => {
      this.serviceTypes = res;
      console.log(this.serviceTypes)
    });
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

import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-editservices',
  templateUrl: './editservices.component.html',
  styleUrls: ['./editservices.component.css']
})
export class EditservicesComponent {
  categories: any[] = [];
  selectedCategoryId: number = 0;
  subcategories: any[] = [];
  subcategoryData: any = {};
  newSubcategory: any = {};
  selectedSubCategoryId:any=0;
  selectedServiceId:any=0;
  getServicesbyIdList:any[]=[];
 serviceForm:any={}
 encodeDocument: File | null = null;
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
        console.log(data);
      });
    }
  }
  onSubcategorychange(): void {
  

    if (this.selectedSubCategoryId) {
      console.log(this.selectedSubCategoryId);
      this.adminServiceService.getAllServicesBySubCategoryId(this.selectedSubCategoryId).subscribe((data: any) => {
        this.getServicesbyIdList = data;
        console.log(this.getServicesbyIdList, "servicelist");
        console.log(data, "servicelist");
        console.log("serviceid",this.selectedServiceId)
        // Assuming you have a single service selected, you can populate the form with its data
        if (this.getServicesbyIdList && this.getServicesbyIdList.length > 0) {
          // this.serviceForm = this.getServicesbyIdList[0];
          console.log("serviceform@@@", this.serviceForm);
        }

      });

    }
  }
 

  getServicesById(): void {
    console.log('Selected Service ID:', this.selectedServiceId);
    this.adminServiceService.getAllServicesByServiceId(this.selectedServiceId).subscribe((data:any)=>{
      this.serviceForm=data;
    })
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
  serviceSubmit(): void {
    if (this.encodeDocument) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
  
        // Create an object to pass variables
        this.serviceForm = {
          subCategoryId: this.selectedSubCategoryId,
          serviceId:this.selectedServiceId,
           serviceName: this.serviceForm.serviceName, // Corrected property name
           description: this.serviceForm.description,
           price:this.serviceForm.price,
           bannerUrl:this.serviceForm.bannerUrl,
           warrentyDuration:this.serviceForm.warrentyDuration,
           encodeDocument:base64String
         };
  

         console.log("Updateobject",this.serviceForm)
    
        this.adminServiceService.updateServices(this.serviceForm).subscribe(
          (res:any) => {
            console.log("Updateobject",this.serviceForm)
         console.log("updated succesfully",res)
            this.serviceForm={};
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
    // window.location.reload();
  }
  // serviceSubmit1(){
  //   if (this.encodeDocument) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       const base64String = reader.result as string;
  
  //       // Create an object to pass variables
  //       this.serviceForm = {
  //         subCategoryId: this.selectedSubCategoryId,
  //          serviceName: this.serviceForm.serviceName, // Corrected property name
  //          description: this.serviceForm.description,
  //          price:this.serviceForm.price,
  //          warrentyDuration:this.serviceForm.warrentyDuration,
  //          encodeDocument:base64String
  //        };
  //        console.log(this.serviceForm)
  
  //       // Call the modified addCategory method with the requestData object
  //       this.adminServiceService.updateServices(this.serviceForm).subscribe(
  //         (res:any) => {
  //        console.log(res)
  //           this.serviceForm={};
  //         },
  //         (error) => {
  //           console.error('Error adding category:', error);
  //         }
  //       );
  //     };
  
  //     reader.readAsDataURL(this.encodeDocument);
  //   } 
    
  // }
  deleteService(id:any){
   this.adminServiceService.deleteServicebyId(id).subscribe(()=>{
    this.getServicesById();
    
   })
   window.location.reload();
  
  }
  serviceSubmit1(): void {
    if (this.encodeDocument) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
  
        // Create an object to pass variables
        this.serviceForm = {
          subCategoryId: this.selectedSubCategoryId,
          serviceName: this.serviceForm.serviceName,
          description: this.serviceForm.description,
          price: this.serviceForm.price,
          warrentyDuration: this.serviceForm.warrentyDuration,
          document: base64String, // Corrected property name
        };
        console.log(this.serviceForm);
  
        // Call the modified addCategory method with the requestData object
        this.adminServiceService.updateServices(this.serviceForm).subscribe(
          (res: any) => {
            console.log(res);
            this.serviceForm = {};
            window.location.reload();
          },
          (error) => {
            console.error('Error updating service:', error);
          }
        );
      };
  
      reader.readAsDataURL(this.encodeDocument);
    }
  }
  
  onSubmit(): void {
    // Include selectedCategoryId in the newSubcategory object
    this.subcategoryData = {
      categoryId: this.selectedCategoryId,
      subCategoryName: this.newSubcategory.subCategoryName, // Corrected property name
      description: this.newSubcategory.description
    };
  
    if (this.selectedCategoryId && this.newSubcategory.subCategoryName && this.newSubcategory.description) {
      // this.adminServiceService.addSubcategory(this.selectedCategoryId, this.subcategoryData).subscribe(
      //   () => {
      //     console.log('Subcategory added successfully');
      //     this.subcategoryData = {};
      //     this.newSubcategory = {}; 
      //     this.onCategoryChange(); 
      //   },
      //   (error) => {
      //     console.error('Error adding subcategory:', error);
      //   }
      // );
    } else {
      console.error('Please fill in all the required fields');
      // You might want to show a user-friendly error message here
    }
  }
}

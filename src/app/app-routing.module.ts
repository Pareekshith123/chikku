import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

import { CategoryListComponent } from './category-list/category-list.component';
import { AdminSubcategoryComponent } from './admin-subcategory/admin-subcategory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddservicesComponent } from './addservices/addservices.component';
import { EngineerFormComponent } from './engineer-form/engineer-form.component';
import { EngineerComponent } from './engineer/engineer.component';
import { ChartComponent } from './chart/chart.component';
import { EditservicesComponent } from './editservices/editservices.component';
import { EditsubcategoryComponent } from './editsubcategory/editsubcategory.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { UserlistComponent } from './userlist/userlist.component';
import { PaymentinvoiceComponent } from './paymentinvoice/paymentinvoice.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PaylaterOrdersComponent } from './paylater-orders/paylater-orders.component';
import { CompletedOrderComponent } from './completed-order/completed-order.component';
import { AuthGuard } from 'src/AuthGuard';
import { TotalordersComponent } from './totalorders/totalorders.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  
     
  
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard], 
    children:[
      {
        path: '',
        component: AdminComponent,
      },
      
 
    ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'changePassword',
    component: ChangePasswordComponent,
  },
  {
    path: 'subcategory',
    component: AdminSubcategoryComponent,
    
  },{
    path: 'categorylist',
    component: CategoryListComponent
  },
  {
    path: 'addservices',
    component: AddservicesComponent
  },  {
    path: 'addengineer',
    component: EngineerFormComponent
  },
  {
    path:'orderallot',
    component: EngineerComponent
  },
  {
    path:"chart",
    component:ChartComponent
  },
  {
    path:"editservice",
    component:EditservicesComponent
  },
  {
    path:"editSubcategory",
    component: EditsubcategoryComponent
  },
  {path:"editCategory",
  component:EditCategoryComponent
},
{
  path:'user',
  component:UserlistComponent
},
{
  path:'totalorders',
  component:TotalordersComponent
}
,
{
  path:'allorders',
  component:PaymentinvoiceComponent
},
{
  path:'placedOrders',
  component:OrdersComponent
},{
  path:'inpage',
  component:InvoiceComponent
},{
  path:'paylater',
  component:PaylaterOrdersComponent
}
,{
  path:'completed',
  component:CompletedOrderComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

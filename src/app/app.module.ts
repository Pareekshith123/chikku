import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminSubcategoryComponent } from './admin-subcategory/admin-subcategory.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryListComponent } from './category-list/category-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/file.interceptor';
import { EngineerComponent } from './engineer/engineer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddservicesComponent } from './addservices/addservices.component';
import { EngineerFormComponent } from './engineer-form/engineer-form.component';
import { ChartComponent } from './chart/chart.component';
import { EditservicesComponent } from './editservices/editservices.component';
import { EditsubcategoryComponent } from './editsubcategory/editsubcategory.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { UserlistComponent } from './userlist/userlist.component';
import { BarchartComponent } from './barchart/barchart.component';
import { PaymentinvoiceComponent } from './paymentinvoice/paymentinvoice.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { EngineerDashboardComponent } from './engineer-dashboard/engineer-dashboard.component';
import { PaylaterOrdersComponent } from './paylater-orders/paylater-orders.component';
import { CompletedOrderComponent } from './completed-order/completed-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TotalordersComponent } from './totalorders/totalorders.component';
import { CancelledordersComponent } from './cancelledorders/cancelledorders.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProfileComponent,
    ChangePasswordComponent,
    AdminSubcategoryComponent,
    CategoryListComponent,
    NavbarComponent,
    SidebarComponent,
    EngineerComponent,
    DashboardComponent,
    AddservicesComponent,
    EngineerFormComponent,
    ChartComponent,
    EditservicesComponent,
    EditsubcategoryComponent,
    EditCategoryComponent,
    UserlistComponent,
    BarchartComponent,
    PaymentinvoiceComponent,
    OrdersComponent,
    LoginComponent,
    InvoiceComponent,
    EngineerDashboardComponent,
    PaylaterOrdersComponent,
    CompletedOrderComponent,
    TotalordersComponent,
    CancelledordersComponent,
    ChatbotComponent,
    
  
  ],


  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
 
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

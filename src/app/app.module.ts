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
import { FileInterceptor } from 'src/file.interceptor';
import { EngineerComponent } from './engineer/engineer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddservicesComponent } from './addservices/addservices.component';
import { EngineerFormComponent } from './engineer-form/engineer-form.component';
import { ChartComponent } from './chart/chart.component';
import { EditservicesComponent } from './editservices/editservices.component';

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
    EditservicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
 
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FileInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

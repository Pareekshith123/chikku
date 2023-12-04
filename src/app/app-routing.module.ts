import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

import { ServiceListComponent } from './service-list/service-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AdminSubcategoryComponent } from './admin-subcategory/admin-subcategory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddservicesComponent } from './addservices/addservices.component';
import { EngineerFormComponent } from './engineer-form/engineer-form.component';
import { EngineerComponent } from './engineer/engineer.component';

const routes: Routes = [
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
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'dash',
    component: DashboardComponent,
  },
  {
    path: 'servicelist',
    component: ServiceListComponent
  },
  {
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

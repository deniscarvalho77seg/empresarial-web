import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { ActionsComponent } from './actions/actions.component';
import { CreateCompanyComponent } from './actions/company/create-company/create-company.component';
import { ListCompanyComponent } from './actions/company/list-company/list-company.component';
import { CreateUserComponent } from './actions/user/create-user/create-user.component';
import { ListUserComponent } from './actions/user/list-user/list-user.component';
import { ListEmployeComponent } from './actions/employe/list-employe/list-employe.component';
import { CreateEmployeComponent } from './actions/employe/create-employe/create-employe.component';
import { ListBillingComponent } from './actions/billing/list-billing/list-billing.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    ActionsComponent,
    CreateCompanyComponent,
    ListCompanyComponent,
    CreateUserComponent,
    ListUserComponent,
    ListEmployeComponent,
    CreateEmployeComponent,
    ListBillingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule
  ]
})
export class DashboardModule { }

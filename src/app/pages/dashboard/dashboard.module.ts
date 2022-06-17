import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { ActionsComponent } from './actions/actions.component';
import { CreateCompanyComponent } from './actions/company/create-company/create-company.component';
import { ListCompanyComponent } from './actions/company/list-company/list-company.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ActionsComponent,
    CreateCompanyComponent,
    ListCompanyComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsComponent } from './pages/dashboard/actions/actions.component';
import { ListBillingComponent } from './pages/dashboard/actions/billing/list-billing/list-billing.component';
import { ListCompanyComponent } from './pages/dashboard/actions/company/list-company/list-company.component';
import { ActionsEmployeComponent } from './pages/dashboard/actions/employe/actions-employe/actions-employe.component';
import { CreateEmployeComponent } from './pages/dashboard/actions/employe/create-employe/create-employe.component';
import { ListEmployeComponent } from './pages/dashboard/actions/employe/list-employe/list-employe.component';
import { ListUserComponent } from './pages/dashboard/actions/user/list-user/list-user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ResumeComponent } from './pages/dashboard/resume/resume.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: ResumeComponent},
      { path: 'actions', component: ActionsComponent},
      { path: 'actionsEmploye', component: ActionsEmployeComponent},
      { path: 'addEmploye', component: CreateEmployeComponent},
      { path: 'listBillings', component: ListBillingComponent},
      { path: 'listCompanys', component: ListCompanyComponent},
      { path: 'listUsers', component: ListUserComponent}]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ relativeLinkResolution: 'corrected' }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsComponent } from './pages/dashboard/actions/actions.component';
import { ListEmployeComponent } from './pages/dashboard/actions/employe/list-employe/list-employe.component';
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
      { path: 'listEmploye', component: ListEmployeComponent}]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ relativeLinkResolution: 'corrected' }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }

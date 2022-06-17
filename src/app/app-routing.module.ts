import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './pages/dash-board/dash-board/dash-board.component';
import { LoginComponent } from './pages/login/login/login.component';
import { ResumeComponent } from './pages/resume/resume.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'dashboard', component: DashBoardComponent},
  { path: 'resume', component: ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

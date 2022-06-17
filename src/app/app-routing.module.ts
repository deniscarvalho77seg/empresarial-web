import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './pages/dash-board/dash-board/dash-board.component';
import { ResumeComponent } from './pages/resume/resume/resume.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'dashboard', component: DashBoardComponent},
  { path: 'resume', component: ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

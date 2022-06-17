import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ResumeComponent } from './dashboard/resume/resume.component';

@NgModule({
  declarations: [ResumeComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }

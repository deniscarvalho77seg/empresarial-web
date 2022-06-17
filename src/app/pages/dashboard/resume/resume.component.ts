import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() {
    console.log("construi pelo menos");
  }

  ngOnInit(): void {
    console.log('teste');
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from 'src/app/shared/service/page.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router, public pageService:PageService) { }

  ngOnInit(): void {
  }

  goTo(url:String){
    this.router.navigate([url]);
  }
}

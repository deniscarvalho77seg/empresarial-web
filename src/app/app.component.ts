import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'empresarial-web';
  loggedIn = false;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.verifyLogin();
  }

  verifyLogin() {
    this.loggedIn = true;
  }

  confirm() {
    this.router.navigate(['/Resume']);
  }
}

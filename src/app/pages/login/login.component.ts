import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
    console.log("opa")
    this.router.navigate(['dashboard']);
  }

}

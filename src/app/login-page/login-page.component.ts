import { Component, OnInit } from '@angular/core';
import { AF} from '../providers/af';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { RouterModule, Routes} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})


export class LoginPageComponent implements OnInit {
  constructor(public afService: AF, private router: Router) {}

  ngOnInit() {
  }

  login() {
    this.afService.loginWithGoogle();
    this.router.navigate(['']);
  }
}
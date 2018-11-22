import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'aa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    console.log();
  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
// import { ToastrService } from '../common/toastr.service';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';
@Component({
  selector: 'aa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) { } // , private toastrService: ToastrService

  userName;
  password;
  mouseoverLogin;

  ngOnInit() {
    console.log();
  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
    // this.toastrService.success('Success');
    this.toastr.success('Success');
  }

  cancel() {
    this.router.navigate(['events']);
  }
}

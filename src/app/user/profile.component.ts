import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
  // selector: 'aa-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor( private auth: AuthService, private router: Router) { }

  ngOnInit() {
    console.log();
    if (this.auth.currentUser) {
      const firstName = new FormControl(this.auth.currentUser.firstName);
      const lastName = new FormControl(this.auth.currentUser.lastName);
      this.profileForm = new FormGroup({
        firstName: firstName,
        lastName: lastName,
      });
    } else {
      const firstName = new FormControl();
      const lastName = new FormControl();
      this.profileForm = new FormGroup({
        firstName: firstName,
        lastName: lastName,
      });
    }
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile (formValues) {
    this.auth.updateCurrentUser(formValues.firstName,formValues.lastName);
    this.router.navigate(['events']);
  }
}

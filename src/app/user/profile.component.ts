import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
// import { ToastrService } from '../common/toastr.service';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';

@Component({
  // selector: 'aa-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor( private auth: AuthService, private router: Router,
     @Inject(TOASTR_TOKEN) private toastr: Toastr) { } // , private toastrService: ToastrService

  ngOnInit() {
    if (this.auth.currentUser) {
      this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
      this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
      this.profileForm = new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      });
    } else {
      this.firstName = new FormControl(' ', Validators.required);
      this.lastName = new FormControl(' ', Validators.required);
      this.profileForm = new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      });
    }
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile (formValues) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      // this.toastrService.success('Success');
      this.toastr.success('Success');
      this.router.navigate(['events']);

    }
  }
  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }
  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }
}

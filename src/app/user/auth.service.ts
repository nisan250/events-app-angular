import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable(
  // {
  // // providedIn: 'root'}
  )
export class AuthService {
  currentUser: IUser;
  // constructor() { }

  loginUser(userName: string, password: string) {
    // a call to the server and log the user in and than set the user propert. but for now...
    // setTimeout(() => {
    // }, 1000);
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: userName,
      lastName: 'sabag'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser (firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}

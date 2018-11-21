import { Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';


export const userRoutes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'login', component: LoginComponent}
];

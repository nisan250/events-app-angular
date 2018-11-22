import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild( userRoutes )
  ]
})
export class UserModule {}


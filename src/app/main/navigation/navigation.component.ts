import { Component } from '@angular/core';
import { AuthService } from './../../user/auth.service';

@Component({
  selector: 'aa-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(private auth: AuthService) {
    console.log(auth, 'auth');
  }
}

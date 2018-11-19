import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'aa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding( 'class.app-container') true;
  appTitle = 'Events App Angular';
}

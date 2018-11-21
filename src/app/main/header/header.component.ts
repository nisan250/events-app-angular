import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'aa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding( 'class.app-header-container') true;

  constructor() { }

  ngOnInit() {
  }

}

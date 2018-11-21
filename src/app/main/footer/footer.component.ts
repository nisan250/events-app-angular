import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'aa-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @HostBinding( 'class.app-footer-container') true;

  constructor() { }

  ngOnInit() {
  }

}

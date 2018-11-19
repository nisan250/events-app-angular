import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'aa-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // @HostBinding('style.background-color')
  // backgroundColor: String = 'yellow';
  @HostBinding( 'class.app-main-container') true;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageTitle = 'Home';

  constructor() { }

  ngOnInit() {
  }

}

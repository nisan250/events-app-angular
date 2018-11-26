import { Component, OnInit } from '@angular/core';
declare var toastr: any;
@Component({
  selector: 'aa-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  pageTitle = 'Demo Page - playground area';
  constructor() { }

  ngOnInit() {
  }

  handleClick(text) {
    toastr.success('YOOHOOOO');
  }
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aa-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  pageTitle = 'Demo Page';
  constructor() { }

  ngOnInit() {
  }

  useToasterService(eventName) {
    console.log(eventName);
  }
}

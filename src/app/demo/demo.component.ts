import { Component, OnInit } from '@angular/core';
// import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'aa-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  pageTitle = 'Demo Page - playground area';
  // constructor(private toastrService: ToastrService) { }

  ngOnInit() {
  }

  handleClick() {
    // this.toastrService.success('YOOHOOOO');
  }
}


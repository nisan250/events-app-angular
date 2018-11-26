import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service';
// import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'aa-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  pageTitle = 'Demo Page - playground area';
  // constructor(private toastrService: ToastrService) { }
  constructor( @Inject(TOASTR_TOKEN) private toastr: Toastr ) { }
  ngOnInit() {
  }

  handleClick() {
    // this.toastrService.success('YOOHOOOO');
    this.toastr.success('YOOHOOOO');
  }
}


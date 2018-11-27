import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aa-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss']
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string;
  @Input() elementId: string;

  constructor() { }

  ngOnInit() {
  }

}

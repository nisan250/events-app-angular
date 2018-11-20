import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aa-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  handleClick() {
    this.eventClick.emit(this.event.name);
  }

}

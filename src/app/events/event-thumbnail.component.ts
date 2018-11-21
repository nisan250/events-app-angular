import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/event.model';
@Component({
  selector: 'aa-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent;
  @Output() eventClick = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  handleClick() {
    this.eventClick.emit(this.event.name);
  }

}

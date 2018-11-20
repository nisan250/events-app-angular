import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'aa-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(1);
  }

}

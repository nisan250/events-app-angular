import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'aa-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: any[];
  event;
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getAllEvents();
    this.event = this.eventService.getEvent({id: 1});
    console.log(this.event);
    console.log(this.events);
  }

}

import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  // selector: 'aa-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: any[];
  pageTitle = 'Events';

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getAllEvents();
    console.log(this.events);
  }

  // handleEventClicked(data) {
  //   console.log('from events list component - ', data);
  // }
}

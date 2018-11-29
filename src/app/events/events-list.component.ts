import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';
@Component({
  // selector: 'aa-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  pageTitle = 'Events';

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {

  // WITH RESOLVER
  // console.log(' onComponentInit events-list:  this.route.snapshot.data["events"]', this.route.snapshot.data['events'] );
  // this.events = this.route.snapshot.data['events'];

  // WITHOUT RESOLVER
  this.events = this.route.snapshot.data['events'];
    this.eventService.getAllEvents().subscribe((events) => {
      this.events = events;
    } );




    // for local data demonstration
    // setTimeout(() => {
    //   console.log(this.route.snapshot.data, 'this.route.snapshot.data');
    //   this.events = this.route.snapshot.data['events'];
    // }, 5000);
  }

  // handleEventClicked(data) {
  //   console.log('from events list component - ', data);
  // }
}

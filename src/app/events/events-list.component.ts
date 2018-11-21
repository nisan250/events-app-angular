import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  // selector: 'aa-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: any;
  pageTitle = 'Events';

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    // we dont need that anymore  we get it from resolver
    this.eventService.getAllEvents().subscribe((events) => {
      this.events = events;
    } );
    // console.log(this.route.snapshot.data, 'this.route.snapshot.data');
    // this.events = this.route.snapshot.data['events'];
    // setTimeout(() => {
    //   console.log(this.route.snapshot.data, 'this.route.snapshot.data');
    //   this.events = this.route.snapshot.data['events'];
    // }, 5000);
  }

  // handleEventClicked(data) {
  //   console.log('from events list component - ', data);
  // }
}

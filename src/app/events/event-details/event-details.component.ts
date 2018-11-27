import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/index';

@Component({
  selector: 'aa-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'votes';
  pageTitle = 'Event Deatail';

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params['id']);

    this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params['id']);
      this.addMode = false;
      this.filterBy = 'all';
      this.sortBy = 'votes';
    });
    // good only when i come from different component
    // this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  // put us in "add" MODE
  addSession () {
    this.addMode = true;
  }

  saveNewSession (session: ISession) {
    // return us the maximum session id;
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.upadteEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession () {
    this.addMode = false;
  }
}

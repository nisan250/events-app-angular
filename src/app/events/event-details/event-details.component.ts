import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared/index';

@Component({
  selector: 'aa-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  // tslint:disable-next-line:no-inferrable-types
  filterBy: string = 'all';
  pageTitle = 'Event Deatail';

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params['id']);
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
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

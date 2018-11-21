import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsListResolverService implements Resolve<any> {

  constructor(private eventService: EventService) { }

  resolve() {
    console.log('start resolve');
    // this.eventService.getAllEvents().map(res => res.json()).subscribe(items => console.log(items));
    this.eventService.getAllEvents().pipe(map((events) => {
      return events;
    }),
    catchError( (err) => Observable.throw(err.json().error) )
    ); // NOT WORKING
  }
}



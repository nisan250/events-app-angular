import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
// import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EventsListResolverService implements Resolve<any> {
  private events;
  private errorMessage;
  constructor(private eventService: EventService) { }

  resolve() {
    // return this.eventService.getAllEvents();

    // console.log('Event List Component initiated!!');
    this.eventService.getAllEvents().subscribe(
      events => events
    );
    // this.eventService.getAllEvents().map(res => res.json()).subscribe(items => console.log(items));
    // this.eventService.getAllEvents().pipe().subscribe((events) => {
    //   return events;
    // });
    // this.eventService.getAllEvents().pipe(map((events) => {
    //   return events;
    // }),
    // catchError( (err) => Observable.throw(err.json().error) )
    // );
  }
}



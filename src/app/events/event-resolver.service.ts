import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable({
  providedIn: 'root'
})

export class EventResolverService implements Resolve<any> {
  constructor(private eventService: EventService) { }

  resolve(route: ActivatedRouteSnapshot) {
    console.log('in EventResolverService -> i return -> this.eventService.getEvent(route.params["i"])',
    this.eventService.getEvent(route.params['i']));

    return this.eventService.getEvent(route.params['i']);
  }
}

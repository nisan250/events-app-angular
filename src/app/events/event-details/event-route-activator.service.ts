import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { EventService } from '../shared/event.service';
// NS
// Guarding Against Route Activation
//  if a detail page not exist   than 404 will show

@Injectable({providedIn: 'root'})
export class EventRouteActivatorService implements CanActivate {
  constructor(private eventService: EventService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    console.log(route, 'this.route');
    const eventExists = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExists) {
        this.router.navigate(['/404']);
    }

    return eventExists;
  }
}

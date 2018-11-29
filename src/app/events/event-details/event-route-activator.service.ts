import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { EventService } from '../shared/event.service';
import { tap, catchError, map } from 'rxjs/operators';
// import { Observable, throwError } from 'rxjs';
import { Observable } from 'rxjs/Observable';
// NS
// Guarding Against Route Activation
//  if a detail page not exist   than 404 will show

@Injectable({providedIn: 'root'})
export class EventRouteActivatorService implements CanActivate {
  constructor(private eventService: EventService,
    private router: Router) { }
      canActivate(route: ActivatedRouteSnapshot) {
        return !!this.eventService.getEvent(+route.params['id']);

        // this.eventService.getEvent(+route.params['id']).subscribe(
        //   event => {
        //     debugger;
        //     if (event) {
        //       console.log('eventeventevent', !!event);
        //       return !!this.eventService.getEvent(+route.params['id']);
        //     } else {
        //       this.router.navigate(['/404']);
        //     }

        //   },
        //   error => {
        //     this.router.navigate(['/404']);
        //   }
        // );


        // old - with local data
        // let eventExists;
        // const eventExists = !!this.eventService.getEvent(+route.params['id']);

        // if (!eventExists) {
        //     this.router.navigate(['/404']);
        // }

        // return eventExists;
      }
}

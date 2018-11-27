import { Component } from '@angular/core';
import { AuthService } from './../../user/auth.service';
import { ISession, EventService } from 'src/app/events';
import { map } from 'rxjs/operators';

@Component({
  selector: 'aa-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  searchTerm = '';
  foundSessions: ISession[];

  constructor(public auth: AuthService, private eventService: EventService) {
    // console.log(auth, 'auth');
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions, '2');
    });
    // this.eventService.searchSessions(searchTerm).pipe(map((sessions) => {
    //   this.foundSessions = sessions;
    //   console.log(this.foundSessions, '2');
    // })
  }
}


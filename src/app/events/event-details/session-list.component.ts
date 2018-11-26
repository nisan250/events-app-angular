import { Component, OnChanges, Input } from '@angular/core';
import { ISession } from '../shared/index';
@Component({
  selector: 'aa-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy;
  visibleSessions: ISession[] = [];
  constructor() { }

  ngOnChanges() {
    // console.log(this.sessions);
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }

  filterSessions(filter) {
    console.log(filter);
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter((session) => {
        return session.level.toLowerCase() === filter;
      });
    }
  }

}

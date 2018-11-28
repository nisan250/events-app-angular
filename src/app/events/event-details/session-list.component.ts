import { Component, OnChanges, Input } from '@angular/core';
import { ISession } from '../shared/index';
import { AuthService } from './../../user/auth.service';
import { VoterService } from './voter.service';

@Component({
  selector: 'aa-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];
  constructor(private auth: AuthService, private voterService: VoterService) { }

  ngOnChanges() {
    // console.log(this.sessions);
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(session, this.auth.currentUser.userName);
    }
    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  userHasVoted (session: ISession) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }

  filterSessions(filter) {
    // console.log(filter);
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter((session) => {
        return session.level.toLowerCase() === filter;
      });
    }
  }
}

// stateless functions
function sortByNameAsc (s1: ISession, s2: ISession) {
  if (s1.name > s2.name) { return 1; } else if (s1.name  === s2.name) { return 0; } else { return -1; }
}

function sortByVotesDesc (s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}

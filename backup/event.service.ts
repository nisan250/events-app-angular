import { Injectable, EventEmitter } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Subject } from 'rxjs/RX';
import { Subject, Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { IEvent, ISession } from './event.model';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private EventsUrl = 'api/events-data.json';

  constructor(private http: Http) {}

  getAllEvents(): Observable<IEvent[]> {
    // for local data
    // const subject = new Subject<IEvent[]>();
    // setTimeout(() => {
    //   subject.next(EVENTS); subject.complete();
    // }, 100);
    // return subject;

    // first approach
    // return this.http.get(this.EventsUrl).map((response: Response) => {
    //   return <IEvent[]>response.json();
    // }).catch(this.handleError);

    // return this.http.get<IEvent[]>(this.EventsUrl).pipe(
    //   map((response: Response) => {
    //       return <IEvent[]>response.json()
    //     })
    // );
    debugger;
    return this.http.get<IEvent[]>(this.EventsUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    ).map((response: Response) => {
        return <IEvent[]>response.json()
      })
    // .map((products: IAlbum[]) => products.find(p => p.albumId === id));
  }

  getEvent(eventId: number): IEvent {
    return EVENTS.find((event) => eventId === event.id);
  }

  saveEvent (event: IEvent) {
    event.id = 999;
    event.sessions = [];
    EVENTS.push(event);
  }

  upadteEvent(event: IEvent): any {
    const index = EVENTS.findIndex(x => x.id === event.id);
    EVENTS[index] = event;
    // throw new Error('Method not implemented.');
  }

  searchSessions(searchTerm: string): any  {
    const term = searchTerm.toLowerCase();
    let results: ISession[] = [];

    EVENTS.forEach(event => {
      // results.push(event.map());
      let matchingSessions = event.sessions.filter(session =>
        session.name.toLowerCase().indexOf(term) > -1);

        matchingSessions = matchingSessions.map((session: any) => {
          session.eventId = event.id;
          return session;
        });
        results = results.concat(matchingSessions);
    });

    // tslint:disable-next-line:prefer-const
    let emitter: EventEmitter<any> = new EventEmitter(true);

    setTimeout(() => {
      emitter.emit(results);

    }, 100);
    return emitter;
  }

  private handleError(error: Response) {
    console.log('error');
    return Observable.throw(error.statusText);
  }
}

const EVENTS: IEvent[] = [
  {
    id: 1,
    name: 'Angular Engage',
    date: new Date('9/26/2026'),
    time: '10:00 am',
    price: 299.99,
    imageUrl: 'assets/images/angularb.png',
    location: {
      address: 'Igal Alon 30',
      city: 'TLV',
      country: 'Israel'
    },
    sessions: [
      {
        id: 1,
        name: 'Angular Best Practices',
        presenter: 'Kyle Simpson',
        duration: 1,
        level: 'Intermediate',
        abstract: `Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,
        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla
        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit
        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra
        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,
        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper
        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida
        convallis ullamcorper, in senectus.`,
        voters: ['nisansabag', 'jeffbridges', 'vardaraz']
      },
      {
        id: 2,
        name: 'Angular Deployment',
        presenter: 'Tracy Lee',
        duration: 1,
        level: 'Intermediate',
        abstract: `Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,
        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla
        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit
        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra
        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,
        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper
        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida
        convallis ullamcorper, in senectus.`,
        voters: ['jackdaniel', 'nisansabag', 'jeffbridges', 'vardaraz']
      },
      {
        id: 3,
        name: 'Angular Performance',
        presenter: 'Kyle Simpson',
        duration: 2,
        level: 'Advanced',
        abstract: `Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,
        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla
        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit
        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra
        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,
        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper
        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida
        convallis ullamcorper, in senectus.`,
        voters: []
      },
      {
        id: 4,
        name: 'Angular On Breakfast',
        presenter: 'David Walsh',
        duration: 2,
        level: 'Advanced',
        abstract: `Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,
        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla
        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit
        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra
        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,
        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper
        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida
        convallis ullamcorper, in senectus.`,
        voters: []
      },
      {
        id: 5,
        name: 'Angular Now',
        presenter: 'Douglas Crockford',
        duration: 2,
        level: 'Beginner',
        abstract: `Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,
        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla
        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit
        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra
        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,
        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper
        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida
        convallis ullamcorper, in senectus.`,
        voters: ['nisansabag', 'jeffbridges']
      }
    ]
  },
  {
    id: 2,
    name: 'ng-conf 2020',
    date: new Date('3/3/2020'),
    time: '9:00 am',
    price: 199.00,
    imageUrl: 'assets/images/ng-conf.png',
    location: {
      address: 'Igal Alon 100',
      city: 'TLV',
      country: 'Isreal'
    },
    sessions: [
      {
        id: 1,
        name: 'Angular Tests',
        presenter: 'David Walsh',
        duration: 4,
        level: 'Beginner',
        abstract: `Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,
        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla
        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit
        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra
        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,
        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper
        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida
        convallis ullamcorper, in senectus.`,
        voters: ['nisansabag', 'jeffbridges']
      },
      {
        id: 2,
        name: 'Angular Firebase',
        presenter: 'David Walsh',
        duration: 3,
        level: 'Intermediate',
        abstract: `Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,
        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla
        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit
        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra
        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,
        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper
        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida
        convallis ullamcorper, in senectus.`,
        voters: ['nisansabag', 'jeffbridges', 'jackdaniel']
      },
      {
        id: 3,
        name: 'Angular 7 Updates',
        presenter: 'Wes Bos',
        duration: 2,
        level: 'Intermediate',
        abstract: `Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,
        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla
        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit
        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra
        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,
        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper
        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida
        convallis ullamcorper, in senectus.`,
        voters: ['vardaraz']
      },
      {
        id: 4,
        name: 'Content Projection',
        presenter: 'Kyle Simpson',
        duration: 1,
        level: 'Beginner',
        abstract: `Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,
        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla
        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit
        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra
        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,
        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper
        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida
        convallis ullamcorper, in senectus.`,
        voters: ['nisansabag']
      },
    ]
  },
  {
    id: 3,
    name: 'React Fire',
    date: new Date('5/4/2037'),
    time: '9:00 am',
    price: 359.00,
    imageUrl: 'assets/images/react.png',
    location: {
      address: 'Sokolov 50',
      city: 'TLV',
      country: 'Isreal'
    },
    sessions: [
      {
        id: 1,
        name: 'React Get Started',
        presenter: 'Kyle Simpson',
        duration: 2,
        level: 'Intermediate',
        abstract: `Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,
        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla
        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit
        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra
        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,
        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper
        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida
        convallis ullamcorper, in senectus.`,
        voters: ['nisansabag', 'vardaraz', 'jeffbridges']
      },
      {
        id: 2,
        name: 'Angular and React',
        presenter: 'Kyle Simpson',
        duration: 2,
        level: 'Intermediate',
        abstract: `Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,
        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla
        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit
        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra
        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,
        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper
        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida
        convallis ullamcorper, in senectus.`,
        voters: ['nisansabag', 'vardaraz']
      },
      {
        id: 3,
        name: 'React and Redux',
        presenter: 'Kyle Simpson',
        duration: 1,
        level: 'Intermediate',
        abstract: `Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,
        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla
        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit
        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra
        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,
        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper
        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida
        convallis ullamcorper, in senectus.`,
        voters: ['nisansabag', 'vardaraz', 'jackdaniel']
      },
      {
        id: 4,
        name: 'React on steroids',
        presenter: 'David Walsh',
        duration: 1,
        level: 'Advanced',
        abstract: `Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,
        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla
        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit
        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra
        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,
        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper
        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida
        convallis ullamcorper, in senectus.`,
        voters: ['nisansabag', 'vardaraz', 'jeffbridges', 'jackdaniel']
      },
      {
        id: 5,
        name: 'React Bits',
        presenter: 'David Walsh',
        duration: 2,
        level: 'Beginner',
        abstract: `Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,
        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla
        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit
        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra
        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,
        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper
        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida
        convallis ullamcorper, in senectus.`,
        voters: ['nisansabag', 'vardaraz']
      },
      {
        id: 6,
        name: 'React Deep Dive',
        presenter: 'Douglas Crockford',
        duration: 2,
        level: 'Intermediate',
        abstract: `Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,
        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla
        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit
        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra
        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,
        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper
        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida
        convallis ullamcorper, in senectus.`,
        voters: ['nisansabag', 'vardaraz']
      },
    ]
  },
  {
    id: 4,
    name: 'All About Angular',
    date: new Date('6/10/2037'),
    time: '8:00 am',
    price: 1000.00,
    imageUrl: 'assets/images/angularb.png',
    location: {
      address: 'Hertsel 17',
      city: 'TLV',
      country: 'Isreal'
    },
    sessions: [
      {
        id: 1,
        name: 'Angula Get Strated',
        presenter: 'David Walsh',
        duration: 2,
        level: 'Beginner',
        abstract: `Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,
        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla
        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit
        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra
        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,
        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper
        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida
        convallis ullamcorper, in senectus.`,
        voters: ['nisansabag', 'jeffbridges']
      },
      {
        id: 2,
        name: 'Great Angular',
        presenter: 'Kyle Simpson',
        duration: 2,
        level: 'Beginner',
        abstract: `Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,
        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla
        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit
        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra
        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,
        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper
        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida
        convallis ullamcorper, in senectus.`,
        voters: ['nisansabag', 'jeffbridges', 'jackdaniel']
      },
      {
        id: 3,
        name: 'Angular on steroids',
        presenter: 'Paul Irish',
        duration: 3,
        level: 'Advanced',
        abstract: `Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,
        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla
        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit
        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra
        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,
        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper
        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida
        convallis ullamcorper, in senectus.`,
        voters: ['jeffbridges', 'jackdaniel']
      },
    ]
  },
  {
    id: 5,
    name: 'ng-tlv',
    date: new Date('2/10/2037'),
    time: '9:00 am',
    price: 550.00,
    imageUrl: 'assets/images/angularb.png',
    location: {
      address: 'Sokolov 222',
      city: 'TLV',
      country: 'Isreal'
    },
    sessions: [
      {
        id: 1,
        name: 'ng-bootstrap',
        presenter: 'Douglas Crockford',
        duration: 1,
        level: 'Intermediate',
        abstract: `Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,
        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla
        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit
        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra
        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,
        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper
        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida
        convallis ullamcorper, in senectus.`,
        voters: ['nisansabag', 'jeffbridges']
      },
      {
        id: 2,
        name: 'Angular 4',
        presenter: 'Paul Irish',
        duration: 2,
        level: 'Beginner',
        abstract: `Lorem ipsum dolor sit amet, aenean urna duis rerum, id nulla sagittis,
        in nunc lacus non libero magna. Tempus ante id tempus id aliquam dolore, nulla
        viverra nulla, lectus ligula non, vestibulum tincidunt nullam quisque hendrerit
        nec donec. Feugiat eu vulputate a. Et integer est, tortor lectus nulla pharetra
        nisl felis, tempor volutpat vestibulum ut, eget vehicula nulla amet quam metus amet,
        vel in amet. In in at quam fringilla, mauris arcu. Nullam eu elit libero ullamcorper
        tempor, vestibulum adipiscing sed, sed vel tortor penatibus risus magna dui, gravida
        convallis ullamcorper, in senectus.`,
        voters: ['nisansabag', 'jeffbridges', 'jackdaniel']
      }
    ]
  }
];

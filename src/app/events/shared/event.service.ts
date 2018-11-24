import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Subject } from 'rxjs/RX';
import { Subject, Observable } from 'rxjs';
import { IEvent } from './event.model';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  private EventsUrl = 'api/events-data.json';

  constructor() {}

  getAllEvents(): Observable<IEvent[]> {
    // let subject = new Subject();
    const subject = new Subject<IEvent[]>();
    // return this.http.get(this.EventsUrl);
    setTimeout(() => {
      subject.next(EVENTS); subject.complete();
    }, 100);
    return subject;
  }

  getEvent(eventId: number): IEvent {
    return EVENTS.find((event) => eventId === event.id);
  }

  saveEvent (event: IEvent) {
    event.id = 999;
    event.sessions = [];
    EVENTS.push(event);
  }

}
const EVENTS: IEvent[] = [
{
  id: 1,
  name: 'Angular Connect',
  date: new Date('2/10/2019'),
  time: '8:00 am',
  price: 599.99,
  imageUrl: 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg',
  location: {
    address: '1057 DT',
    city: 'London',
    country: 'England'
  },
  sessions: [
    {
      id: 1,
      name: 'Using Angular 4 pipes',
      presenter: 'Jermy White',
      duration: 2,
      level: 'begginer',
      abstract: 'blab bla bla blab bla bla blab bla bla ',
      voters: ['bradgreen', 'igorma', 'john']
    },
    {
      id: 1,
      name: 'Using Angular 5 components',
      presenter: 'Julia Shapira',
      duration: 3,
      level: 'expert',
      abstract: 'blab 2bla2 bla 2blab2 b2la bla blab bla bla ',
      voters: [, 'igorma', 'john']
    }
  ]
},
{
  id: 2,
  name: 'Angular meetup',
  date: new Date('3/11/2019'),
  time: '10:00 am',
  price: 399.99,
  imageUrl: 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg',
  onlineUrl: 'http://demo-url',
  sessions: [
    {
      id: 1,
      name: 'Using Angular 6 pipes',
      presenter: 'Roberta White',
      duration: 2,
      level: 'begginer',
      abstract: 'blab bla bla blab bla bla blab bla bla ',
      voters: ['bradgreen', 'igorma', 'john']
    },
    {
      id: 1,
      name: 'Using Angular 7 components',
      presenter: 'Simon Shultz',
      duration: 3,
      level: 'expert',
      abstract: 'blab 2bla2 bla 2blab2 b2la bla blab bla bla ',
      voters: [, 'igorma', 'john']
    }
  ]
}
];

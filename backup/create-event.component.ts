import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/event.service';

@Component({
  selector: 'aa-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})

export class CreateEventComponent {
  pageTitle = 'Create an Event';
  isDirty: Boolean = true;
  name;
  date;
  time;
  price;
  address;
  city;
  country;
  onlineUrl;
  imageUrl;

  constructor(private router: Router, private eventService: EventService) { }


  saveEvent (formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }
  cancel() {
    this.router.navigate(['/events']);
  }
}

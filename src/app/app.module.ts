import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  EventRouteActivatorService,
  CreateEventComponent,
  EventsListResolverService,
 } from './events/index';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './main/navigation/navigation.component';
import { LicensesComponent } from './licenses/licenses.component';
import { FooterComponent } from './main/footer/footer.component';
import { HeaderComponent } from './main/header/header.component';
import { MainComponent } from './main/main.component';
import { Error404Component } from './errors/error-404.component';
import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HomeComponent,
    NavigationComponent,
    LicensesComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  providers: [
    EventService, // shorthand {provide: EventService, useValue: EventService}
    EventRouteActivatorService,
    // we suppling the string canDeactivateCreateEvent and attaching a function
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    EventsListResolverService,
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}

export function checkDirtyState (component: CreateEventComponent) {
  console.log(component.isDirty);

  if (component.isDirty) {
    return window.confirm('you have not saved this event. prees ok to leave.');
  }
  return true;
}

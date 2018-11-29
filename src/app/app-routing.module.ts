import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PreloadAllModules } from '@angular/router';

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventsListResolverService,
  EventResolverService,
  CreateSessionComponent,
 } from './events/index';

import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { LicensesComponent } from './licenses/licenses.component';
import { Error404Component } from './errors/error-404.component';

const routes: Routes = [
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  { path: 'events', component: EventsListComponent,
    resolve: { events: EventsListResolverService }},
  { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolverService }},
  { path: 'event/session/new', component: CreateSessionComponent},
  { path: 'demo', component: DemoComponent},
  { path: 'home', component: HomeComponent},
  { path: 'license', component: LicensesComponent},
  { path: '404', component: Error404Component},
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  // { path: '**', component: HomeComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // for downloading all modules before live
  // imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

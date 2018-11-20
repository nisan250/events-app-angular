import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { LicensesComponent } from './licenses/licenses.component';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

const routes: Routes = [
  { path: 'events/:id', component: EventDetailsComponent},
  { path: 'events', component: EventsListComponent},
  { path: 'demo', component: DemoComponent},
  { path: 'home', component: HomeComponent},
  { path: 'license', component: LicensesComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

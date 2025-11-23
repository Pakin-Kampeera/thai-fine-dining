import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { MenuComponent } from './pages/menu/menu';
import { AboutComponent } from './pages/about/about';
import { EventsComponent } from './pages/events/events';
import { ContactComponent } from './pages/contact/contact';
import { ReservationComponent } from './pages/reservation/reservation';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'about', component: AboutComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: '**', redirectTo: '' }
];

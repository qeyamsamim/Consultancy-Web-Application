import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import { HomeComponent } from './components/home/home.component';
import { NewsEventsComponent } from './components/news-events/news-events.component';
import { OurClassesComponent } from './components/our-classes/our-classes.component';
import { OurLibraryComponent } from './components/our-library/our-library.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ToeflIbtComponent } from './components/toefl-ibt/toefl-ibt.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'library', component: OurLibraryComponent },
  { path: 'news-events', component: NewsEventsComponent },
  { path: 'classes', component: OurClassesComponent },
  { path: 'toefl-ibt', component: ToeflIbtComponent },
  { path: 'services', component: OurServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

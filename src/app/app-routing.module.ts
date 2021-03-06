import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminBooksComponent } from './components/admin/admin-books/admin-books.component';
import { AdminClassComponent } from './components/admin/admin-class/admin-class.component';
import { AdminEventsComponent } from './components/admin/admin-events/admin-events.component';
import { AdminNewsComponent } from './components/admin/admin-news/admin-news.component';
import { AdminQuickLinksComponent } from './components/admin/admin-quick-links/admin-quick-links.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserAdvisingFormComponent } from './components/admin/user-advising-form/user-advising-form.component';
import { UserContactFormComponent } from './components/admin/user-contact-form/user-contact-form.component';
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
  { path: 'about', component: AboutComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'admin-news', component: AdminNewsComponent },
      { path: 'admin-events', component: AdminEventsComponent },
      { path: 'admin-books', component: AdminBooksComponent },
      { path: 'admin-class', component: AdminClassComponent },
      { path: 'admin-quick-links', component: AdminQuickLinksComponent },
      { path: 'user-advising-form', component: UserAdvisingFormComponent },
      { path: 'user-contact-form', component: UserContactFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { AdvisingFormComponent } from './components/our-services/advising-form/advising-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedNewsComponent } from './components/home/featured-news/featured-news.component';
import { FeaturedEventsComponent } from './components/home/featured-events/featured-events.component';
import { QuickLinksComponent } from './components/home/quick-links/quick-links.component';
import { HomeComponent } from './components/home/home.component';
import { NewsEventsComponent } from './components/news-events/news-events.component';
import { ToeflIbtComponent } from './components/toefl-ibt/toefl-ibt.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { OurLibraryComponent } from './components/our-library/our-library.component';
import { OurClassesComponent } from './components/our-classes/our-classes.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { StudyAbroadComponent } from './components/home/study-abroad/study-abroad.component';
import { CounselingProcessComponent } from './components/home/counseling-process/counseling-process.component';
import { SuccessStoriesComponent } from './components/home/success-stories/success-stories.component';
import { SearchBookComponent } from './components/our-library/search-book/search-book.component';
import { QuickLinksLibraryComponent } from './components/our-library/quick-links-library/quick-links-library.component';
import { LibraryImagesComponent } from './components/our-library/library-images/library-images.component';
import { NewsComponent } from './components/news-events/news/news.component';
import { OurEventsComponent } from './components/news-events/our-events/our-events.component';
import { ClassContentComponent } from './components/our-classes/class-content/class-content.component';
import { ClassQuickLinksComponent } from './components/our-classes/class-quick-links/class-quick-links.component';
import { ServicesQuickLinksComponent } from './components/our-services/services-quick-links/services-quick-links.component';
import { ServicesNewsComponent } from './components/our-services/services-news/services-news.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { ContactDetailsComponent } from './components/contact/contact-details/contact-details.component';
import { AboutQuickLinksComponent } from './components/about/about-quick-links/about-quick-links.component';

import { QuickLinksService } from './services/quick-links.service';
import { NewsService } from './services/news.service';
import { ClassesService } from './services/classes.service';
import { AdvisingFormService } from './services/advisong-form.service';
import { UserMessageService } from './services/user-message.service';
import { ShortenPipe } from './shared/shorten.pipe';
import { FilterPipe } from './shared/filter.pipe';
import { BooksService } from './services/books.service';
import { AlertComponent } from './shared/components/alert/alert.component';
import { EventsService } from './services/events.service';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { FormComponent } from './components/admin/admin-shared/form/form.component';
import { AdminNewsComponent } from './components/admin/admin-news/admin-news.component';
import { AdminEventsComponent } from './components/admin/admin-events/admin-events.component';
import { EventsFormComponent } from './components/admin/admin-events/events-form/events-form.component';
import { NewsFormComponent } from './components/admin/admin-news/news-form/news-form.component';
import { AdminBooksComponent } from './components/admin/admin-books/admin-books.component';
import { BooksFormComponent } from './components/admin/admin-books/books-form/books-form.component';
import { AdminQuickLinksComponent } from './components/admin/admin-quick-links/admin-quick-links.component';
import { QuickLinksFormComponent } from './components/admin/admin-quick-links/quick-links-form/quick-links-form.component';
import { SearchComponent } from './components/admin/search/search.component';
import { DataListComponent } from './components/admin/admin-shared/data-list/data-list.component';
import { UserMessagesComponent } from './components/admin/admin-shared/user-messages/user-messages.component';
import { UserAdvisingFormComponent } from './components/admin/user-advising-form/user-advising-form.component';
import { UserContactFormComponent } from './components/admin/user-contact-form/user-contact-form.component';
import { AdminClassComponent } from './components/admin/admin-class/admin-class.component';
import { ClassFormComponent } from './components/admin/admin-class/class-form/class-form.component';
import { ClassDataComponent } from './components/admin/admin-class/class-data/class-data.component';
import { EditDeleteComponent } from './components/admin/admin-shared/edit-delete/edit-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    AdvisingFormComponent,
    FooterComponent,
    FeaturedNewsComponent,
    FeaturedEventsComponent,
    QuickLinksComponent,
    HomeComponent,
    NewsEventsComponent,
    ToeflIbtComponent,
    ContactComponent,
    AboutComponent,
    OurLibraryComponent,
    OurClassesComponent,
    OurServicesComponent,
    StudyAbroadComponent,
    CounselingProcessComponent,
    SuccessStoriesComponent,
    SearchBookComponent,
    QuickLinksLibraryComponent,
    LibraryImagesComponent,
    NewsComponent,
    OurEventsComponent,
    ClassContentComponent,
    ClassQuickLinksComponent,
    ServicesQuickLinksComponent,
    ServicesNewsComponent,
    ContactFormComponent,
    ContactDetailsComponent,
    AboutQuickLinksComponent,
    ShortenPipe,
    FilterPipe,
    AlertComponent,
    AdminComponent,
    AdminHeaderComponent,
    FormComponent,
    AdminNewsComponent,
    AdminEventsComponent,
    EventsFormComponent,
    NewsFormComponent,
    AdminBooksComponent,
    BooksFormComponent,
    AdminQuickLinksComponent,
    QuickLinksFormComponent,
    SearchComponent,
    DataListComponent,
    UserMessagesComponent,
    UserAdvisingFormComponent,
    UserContactFormComponent,
    AdminClassComponent,
    ClassFormComponent,
    ClassDataComponent,
    EditDeleteComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    NewsService,
    EventsService,
    ClassesService,
    QuickLinksService,
    BooksService,
    AdvisingFormService,
    UserMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

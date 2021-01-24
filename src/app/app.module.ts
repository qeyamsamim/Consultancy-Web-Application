import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { AdvisingFormComponent } from './components/advising-form/advising-form.component';
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
    SuccessStoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

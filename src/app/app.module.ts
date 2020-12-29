import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AdvisingFormComponent } from './components/advising-form/advising-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedNewsComponent } from './components/featured-news/featured-news.component';
import { CardCarouselComponent } from './components/card-carousel/card-carousel.component';
import { FeaturedEventsComponent } from './components/featured-events/featured-events.component';
import { QuickLinksComponent } from './components/quick-links/quick-links.component';
import { HomeComponent } from './components/home/home.component';
import { NewsEventsComponent } from './components/news-events/news-events.component';
import { ToeflIbtComponent } from './components/toefl-ibt/toefl-ibt.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { OurLibraryComponent } from './components/our-library/our-library.component';
import { OurClassesComponent } from './components/our-classes/our-classes.component';
import { OurServicesComponent } from './components/our-services/our-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    AdvisingFormComponent,
    FooterComponent,
    FeaturedNewsComponent,
    CardCarouselComponent,
    FeaturedEventsComponent,
    QuickLinksComponent,
    HomeComponent,
    NewsEventsComponent,
    ToeflIbtComponent,
    ContactComponent,
    AboutComponent,
    OurLibraryComponent,
    OurClassesComponent,
    OurServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

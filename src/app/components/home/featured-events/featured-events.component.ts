import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-featured-events',
  templateUrl: './featured-events.component.html',
  styleUrls: ['./featured-events.component.css'],
  providers: [EventsService]
})
export class FeaturedEventsComponent implements OnInit {

  events = [];

  constructor(
    private eventsService: EventsService
  ) {}

  ngOnInit(): void {
    this.events = this.eventsService.getFeaturedEvents();
  }

}

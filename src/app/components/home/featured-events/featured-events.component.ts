import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Event } from '../../../models/event.model';

@Component({
  selector: 'app-featured-events',
  templateUrl: './featured-events.component.html',
  styleUrls: ['./featured-events.component.css', '../../../app.component.css'],
  providers: [EventsService]
})
export class FeaturedEventsComponent implements OnInit {

  events: Event[];

  constructor(
    private eventsService: EventsService
  ) {}

  ngOnInit(): void {
    this.events = this.eventsService.getFeaturedEvents();
  }

}

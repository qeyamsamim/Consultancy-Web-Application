import { Component, OnInit } from '@angular/core';

import { EventsService } from '../../../services/events.service';

@Component({
  selector: 'app-our-events',
  templateUrl: './our-events.component.html',
  styleUrls: ['./our-events.component.css'],
  providers: [EventsService]
})
export class OurEventsComponent implements OnInit {

  events = [];

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
  }
}

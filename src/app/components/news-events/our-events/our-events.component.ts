import { Component, OnInit } from '@angular/core';

import { Event } from '../../../models/event.model';
import { EventsService } from '../../../services/events.service';

@Component({
  selector: 'app-our-events',
  templateUrl: './our-events.component.html',
  styleUrls: ['./our-events.component.css']
})
export class OurEventsComponent implements OnInit {

  events: Event[];

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
  }
}

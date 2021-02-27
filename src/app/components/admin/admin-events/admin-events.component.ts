import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event.model';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.css']
})
export class AdminEventsComponent implements OnInit {

  events: Event[];
  search = '';

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
    this.eventsService.eventChanged
      .subscribe(
        (event: Event[]) => {
          this.events = event;
        }
      );
  }

}

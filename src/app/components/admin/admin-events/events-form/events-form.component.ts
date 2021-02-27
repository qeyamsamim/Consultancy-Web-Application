import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Event } from 'src/app/models/event.model';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.css', '../../admin.component.css']
})
export class EventsFormComponent implements OnInit {

  eventsForm: FormGroup;
  message = 'Event';

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {
    this.eventsForm = new FormGroup({
      reusableForm: new FormGroup({
        'title': new FormControl(null, Validators.required),
        'description': new FormControl(null, Validators.required),
        'tag': new FormControl('other', Validators.required),
        'imgURL': new FormControl(null, Validators.required),
        'url': new FormControl(null, Validators.required),
      }),
      'type': new FormControl(null, Validators.required),
      'timeFrom': new FormControl(null, Validators.required),
      'timeTo': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const value = this.eventsForm.value;
    const newEvent = new Event(
      value.reusableForm.title,
      value.type,
      value.reusableForm.tag,
      new Date(),
      new Date(),
      new Date(),
      value.address,
      value.reusableForm.imgURL,
      value.reusableForm.description,
      value.reusableForm.url
    )
    this.eventsService.addEvents(newEvent);
    this.eventsForm.reset();
  }
}

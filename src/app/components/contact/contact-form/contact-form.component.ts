import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserMessage } from 'src/app/models/user-message.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css', '../../../app.component.css']
})
export class ContactFormComponent implements OnInit {

  charCount = '';
  messageForm: FormGroup;
  pattern = "^[a-zA-Z]{1,30}$";
  message = 'We have successfully received your message. We will contact you back if necssary!'
  isClicked = false;

  constructor() { }

  ngOnInit(): void {
    this.messageForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required, Validators.pattern(this.pattern)]),
      'lastName': new FormControl(null, [Validators.required, Validators.pattern(this.pattern)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'subject': new FormControl(null, Validators.required),
      'message': new FormControl(null, [Validators.required, Validators.maxLength(250)])
    });
  }

  onSubmit() {
    const value = this.messageForm.value;
    const newMessage = new UserMessage(
      value.firstName,
      value.lastName,
      value.email,
      value.subject,
      value.message
    );
    console.log(newMessage);
    this.isClicked = true;
    this.messageForm.reset();
    this.charCount = '';
  }

  onHandleClose() {
    this.isClicked = false;
  }

}

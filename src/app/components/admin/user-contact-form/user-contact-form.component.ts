import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-contact-form',
  templateUrl: './user-contact-form.component.html',
  styleUrls: ['./user-contact-form.component.css']
})
export class UserContactFormComponent implements OnInit {

  userData = [];

  constructor() { }

  ngOnInit(): void {
  }

}

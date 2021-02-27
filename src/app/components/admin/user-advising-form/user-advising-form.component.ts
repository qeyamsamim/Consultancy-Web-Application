import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-advising-form',
  templateUrl: './user-advising-form.component.html',
  styleUrls: ['./user-advising-form.component.css']
})
export class UserAdvisingFormComponent implements OnInit {

  userData = [];

  constructor() { }

  ngOnInit(): void {
  }

}

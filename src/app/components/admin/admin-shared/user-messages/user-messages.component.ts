import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-messages',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.css', '../../admin.component.css']
})
export class UserMessagesComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}

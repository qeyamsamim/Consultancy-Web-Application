import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-events',
  templateUrl: './featured-events.component.html',
  styleUrls: ['./featured-events.component.css']
})
export class FeaturedEventsComponent implements OnInit {

  eventItem = [
    {
      day: '24',
      month: 'DEC',
      year: '2020',
      type: 'ONLINE EVENT',
      category: 'For Undergraduate',
      name: 'Study Abroad',
      url: '/news-events',
      register: 'Click here to Register'
    },
    {
      day: '28',
      month: 'DEC',
      year: '2020',
      type: 'ONLINE EVENT',
      category: 'For Graduate',
      name: 'Study Abroad',
      url: '/news-events',
      register: 'Click here to Register'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

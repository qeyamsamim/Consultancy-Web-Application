import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navItem = [
    { title: 'Library', uRL: '/library'},
    { title: 'News & Events', uRL: '/news-events'},
    { title: 'TOEFL iBT Test', uRL: '/toefl-ibt'},
    { title: 'Services', uRL: '/services'},
    { title: 'Contacts', uRL: '/contact'},
    { title: 'About', uRL: '/about'}
  ];

  dropdownItem = [
    {title: 'TOEFL iBT', uRL: '/classes'},
    {title: 'IELTS', uRL: '/classes'},
    {title: 'Academic English', uRL: '/classes'},
    {title: 'SAT', uRL: '/classes'},
    {title: 'GRE', uRL: '/classes'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

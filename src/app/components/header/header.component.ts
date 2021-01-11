import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navItem = [
    { title: 'Library', uRL: '/library'},
    { title: 'Classes', uRL: '/classes'},
    { title: 'News & Events', uRL: '/news-events'},
    { title: 'TOEFL iBT Test', uRL: '/toefl-ibt'},
    { title: 'Services', uRL: '/services'},
    { title: 'Contacts', uRL: '/contact'},
    { title: 'About', uRL: '/about'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

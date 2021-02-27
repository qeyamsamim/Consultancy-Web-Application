import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css', '../admin.component.css']
})
export class AdminHeaderComponent implements OnInit {

  navItem = [
    { title: 'News', url: '/admin/admin-news' },
    { title: 'Events', url: '/admin/admin-events' },
    { title: 'Books', url: '/admin/admin-books' },
    { title: 'Classes', url: '/admin/admin-class' },
    { title: 'Quick Links', url: '/admin/admin-quick-links' },
    { title: 'Advising', url: '/admin/user-advising-form' },
    { title: 'Messages', url: '/admin/user-contact-form'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

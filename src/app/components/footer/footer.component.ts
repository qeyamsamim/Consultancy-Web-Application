import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  quickLinks = [
    { title: 'Home', uRL: '/'},
    { title: 'Latest News & Events', uRL: '/news-events'},
    { title: 'Why ourCompany', uRL: '/about'},
    { title: 'Classes', uRL: '/classes'},
    { title: 'FAQ', uRL: '/about'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

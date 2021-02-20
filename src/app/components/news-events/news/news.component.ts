import { Component, OnInit } from '@angular/core';

import { News } from '../../../models/news.model';

import { NewsService } from '../../../services/news.service';
import { EventsService } from '../../../services/events.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News[];
  events = [];

  constructor(
    private newsService: NewsService,
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {
    this.news = this.newsService.getNews();
    this.events = this.eventsService.getEvents();
  }

}

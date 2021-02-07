import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-services-news',
  templateUrl: './services-news.component.html',
  styleUrls: ['./services-news.component.css']
})
export class ServicesNewsComponent implements OnInit {

  news: News[] = [];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.news = this.newsService.getServiceNews();
  }

}

import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-featured-news',
  templateUrl: './featured-news.component.html',
  styleUrls: ['./featured-news.component.css', '../../../app.component.css'],
  providers: [NewsService]
})
export class FeaturedNewsComponent implements OnInit {

  news: News[];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.news = this.newsService.getFeaturedNews();
  }

}

import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.css']
})
export class AdminNewsComponent implements OnInit {

  news: News[];
  search = '';

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.news = this.newsService.getNews();
    this.newsService.newsChanged
      .subscribe(
        (news: News[]) => {
          this.news = news;
        }
      );
  }

}

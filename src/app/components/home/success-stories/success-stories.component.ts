import { Component, OnInit } from '@angular/core';

import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.css', '../../../app.component.css'],
  providers: [NewsService]
})
export class SuccessStoriesComponent implements OnInit {

  successStories: News [];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.successStories = this.newsService.getSuccessStories();
  }

}

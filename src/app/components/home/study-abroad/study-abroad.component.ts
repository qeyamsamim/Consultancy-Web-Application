import { Component, OnInit } from '@angular/core';

import { News } from 'src/app/models/news.model';

import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-study-abroad',
  templateUrl: './study-abroad.component.html',
  styleUrls: ['./study-abroad.component.css'],
  providers: [NewsService]
})
export class StudyAbroadComponent implements OnInit {

  studyAbroad: News[];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.studyAbroad = this.newsService.getStudyAbroad();
  }

}

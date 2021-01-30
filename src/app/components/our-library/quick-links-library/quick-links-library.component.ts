import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

import { News } from '../../../models/news.model';

@Component({
  selector: 'app-quick-links-library',
  templateUrl: './quick-links-library.component.html',
  styleUrls: ['./quick-links-library.component.css'],
  providers: [NewsService]
})
export class QuickLinksLibraryComponent implements OnInit {

  libraryLinks: News[];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.libraryLinks = this.newsService.getLibraryNews();
  }

}

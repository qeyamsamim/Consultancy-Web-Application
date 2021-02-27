import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css', '../../admin.component.css']
})
export class NewsFormComponent implements OnInit {

  newsForm: FormGroup;
  message = 'News';

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.newsForm = new FormGroup({
      reusableForm: new FormGroup({
        'title': new FormControl(null, Validators.required),
        'description': new FormControl(null, Validators.required),
        'tag': new FormControl('other', Validators.required),
        'url': new FormControl(null, Validators.required),
        'imgURL': new FormControl(null, Validators.required)
      })
    });
  }

  onSubmit() {
    const value = this.newsForm.value.reusableForm;
    const newNews = new News(
      value.title,
      value.description,
      value.tag,
      new Date(),
      value.imgURL,
      value.url
    );
    this.newsService.addNews(newNews);
    this.newsForm.reset();
  }
}

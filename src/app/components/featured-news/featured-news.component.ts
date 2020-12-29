import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-news',
  templateUrl: './featured-news.component.html',
  styleUrls: ['./featured-news.component.css']
})
export class FeaturedNewsComponent implements OnInit {

  newsItems = [
    {
      title: 'News One',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional.',
      date: 'Nov 12',
      button: 'Continue',
      url: '/news-events',
      imageURL: '../../../assets/images/news2.JPG',
      alt: 'newsOne'
    },
    {
      title: 'News Two',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional.',
      date: 'Nov 12',
      button: 'Continue',
      url: '/news-events',
      imageURL: '../../../assets/images/news3.JPG',
      alt: 'newsTwo'
    },
    {
      title: 'News Three',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional.',
      date: 'Nov 12',
      button: 'Continue',
      url: '/news-events',
      imageURL: '../../../assets/images/news4.JPG',
      alt: 'newsThree'
    },
    {
      title: 'News Four',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional.',
      date: 'Nov 12',
      button: 'Continue',
      url: '/news-events',
      imageURL: '../../../assets/images/news5.JPG',
      alt: 'newsFour'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

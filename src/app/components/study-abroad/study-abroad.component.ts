import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-abroad',
  templateUrl: './study-abroad.component.html',
  styleUrls: ['./study-abroad.component.css']
})
export class StudyAbroadComponent implements OnInit {

  items = [
    {
      title: 'A Complete Guide to Study USA',
      text: 'We tell the opportunity to study in one of the top universities in USA. Come and join us. We tell the opportunity to study in one of the top universities',
      alt: 'studyUSA',
      imgURL: '../../../assets/images/studyUS.jpg',
      url: '/news-events'
    },
    {
      title: '10 Reasons to study in Europe',
      text: 'There are really good reasons if you want to continue your education in any country in Europe. There are really good reasons if you want to continue',
      alt: 'studyEurope',
      imgURL: '../../../assets/images/studyEurope.png',
      url: '/news-events'
    },
    {
      title: '8 Reasons to study in Australia',
      text: 'Here are the reasons why to continue your education in Australia. Here are the reasons why to continue your education in Australia. Here are the reasons',
      alt: 'studyAustralia',
      imgURL: '../../../assets/images/studyAustralia.jpg',
      url: '/news-events'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

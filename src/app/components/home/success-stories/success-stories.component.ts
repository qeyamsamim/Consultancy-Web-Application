import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.css']
})
export class SuccessStoriesComponent implements OnInit {

  storyItems = [
    {
      name: 'Person A',
      content: 'Some quick example text to build on the card title and make up the bulk. This card belongs to the person 1. And there is something',
      date: 'DEC 19',
      imageURL: '../../../assets/images/personA.JPG',
      alt: 'personA',
      url: '/services',
      viewMore: 'View More'
    },
    {
      name: 'Person B',
      content: 'Some quick example text to build on the card title and make up the bulk. This card belongs to the person 2. And there is something',
      date: 'DEC 29',
      imageURL: '../../../assets/images/personB.JPG',
      alt: 'personA',
      url: '/services',
      viewMore: 'View More'
    },
    {
      name: 'Person C',
      content: 'Some quick example text to build on the card title and make up the bulk. This card belongs to the person 3. And there is something',
      date: 'DEC 11',
      imageURL: '../../../assets/images/personC.JPG',
      alt: 'personA',
      url: '/services',
      viewMore: 'View More'
    },
    {
      name: 'Person D',
      content: 'Some quick example text to build on the card title and make up the bulk. This card belongs to the person 4. And there is something',
      date: 'NOV 10',
      imageURL: '../../../assets/images/personD.JPG',
      alt: 'personA',
      url: '/services',
      viewMore: 'View More'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

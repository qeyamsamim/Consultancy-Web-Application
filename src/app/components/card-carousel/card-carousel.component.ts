import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.css']
})
export class CardCarouselComponent implements OnInit {

  storyItems = [
    {
      name: 'Person A',
      content: 'Some quick example text to build on the card title and make up the bulk.',
      date: 'DEC 19',
      imageURL: '../../../assets/images/personA.JPG',
      alt: 'personA',
      url: '/services',
      viewMore: 'View More'
    },
    {
      name: 'Person B',
      content: 'Some quick example text to build on the card title and make up the bulk.',
      date: 'DEC 29',
      imageURL: '../../../assets/images/personB.JPG',
      alt: 'personA',
      url: '/services',
      viewMore: 'View More'
    },
    {
      name: 'Person C',
      content: 'Some quick example text to build on the card title and make up the bulk.',
      date: 'DEC 11',
      imageURL: '../../../assets/images/personC.JPG',
      alt: 'personA',
      url: '/services',
      viewMore: 'View More'
    },
    {
      name: 'Person D',
      content: 'Some quick example text to build on the card title and make up the bulk.',
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

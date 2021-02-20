import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css', '../../../app.component.css']
})
export class CarouselComponent implements OnInit {

  carouselItems = [
    {
      title: 'Consultancy',
      text:'We provide the best and safe learning environment for students to come and study.',
      image: '../../../assets/images/home1.JPG',
      alt: 'students'
    },
    {
      title: 'Our Library',
      text:'You can find the most rich library in the city. In our library, you can find different kinds of books and study in quiet place',
      image: '../../../assets/images/home2.JPG',
      alt: 'library'
    },
    {
      title: 'English Classes',
      text:'You can register for different English classes taught by professional teachers.',
      image: '../../../assets/images/home3.JPG',
      alt: 'classes'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-images',
  templateUrl: './library-images.component.html',
  styleUrls: ['./library-images.component.css']
})
export class LibraryImagesComponent implements OnInit {

  images = [
    { imgURL: '../../../assets/images/home2.JPG', alt: 'library1', dataSlide: '0' },
    { imgURL: '../../../assets/images/home1.JPG', alt: 'library2', dataSlide: '1' },
    { imgURL: '../../../assets/images/home3.JPG', alt: 'library3', dataSlide: '2' },
    { imgURL: '../../../assets/images/news2.JPG', alt: 'library4', dataSlide: '3' },
    { imgURL: '../../../assets/images/news3.JPG', alt: 'library5', dataSlide: '4' },
    { imgURL: '../../../assets/images/news4.JPG', alt: 'library6', dataSlide: '5' },
    { imgURL: '../../../assets/images/news5.JPG', alt: 'library7', dataSlide: '6' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

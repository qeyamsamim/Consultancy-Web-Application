import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-library',
  templateUrl: './our-library.component.html',
  styleUrls: ['./our-library.component.css']
})
export class OurLibraryComponent implements OnInit {

  mainText = "Hello this is library Hello this is library Hello this is library"
    + "Hello this is library Hello this is library Hello this is library"
    + "Hello this is library Hello this is library Hello this is library"
    + "Hello this is library Hello this is library Hello this is library"
    + "Hello this is library Hello this is library Hello this is library"
    + "Hello this is library Hello this is library Hello this is library"
    + "Hello this is library Hello this is library Hello this is library"
    + "Hello this is library Hello this is library Hello this is library"
    + "Hello this is library Hello this is library Hello this is library"
    + "Hello this is library Hello this is library Hello this is library"
    + "Hello this is library Hello this is library Hello this is library"
    + "Hello this is library Hello this is library Hello this is library"
    + "Hello this is library Hello this is library Hello this is library"
    + "Hello this is library Hello this is library Hello this is library"
    + "Hello this is library Hello this is library Hello this is library";

    secondaryText = "Hello this is library Hello this is library Hello this is library "
    + "Hello this is library Hello this is library Hello this is library "
    + "Hello this is library Hello this is library Hello this is library "
    + "Hello this is library Hello this is library Hello this is library "
    + "Hello this is library Hello this is library Hello this is library "
    + "Hello this is library Hello this is library Hello this is library "
    + "Hello this is library Hello this is library Hello this is library "
    + "Hello this is library Hello this is library Hello this is library "
    + "Hello this is library Hello this is library Hello this is library "
    + "Hello this is library Hello this is library Hello this is library ";

    books = [
      { name: 'Barrons TOEFL iBT', number: '5', edition: '2016', imgURL: '../../../assets/images/barronsTOEFL.jpg' },
      { name: 'Writing Tips', number: '2', edition: '2013', imgURL: '../../../assets/images/writingTip.png' },
      { name: 'Academic Writing', number: '6', edition: '2017', imgURL: '../../../assets/images/academicWriting.jpg' }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}

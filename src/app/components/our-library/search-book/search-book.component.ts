import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  books = [
    { name: 'Barrons TOEFL iBT', number: '5', edition: '2016', imgURL: '../../../assets/images/barronsTOEFL.jpg' },
    { name: 'Writing Tips', number: '2', edition: '2013', imgURL: '../../../assets/images/writingTip.png' },
    { name: 'Academic Writing', number: '6', edition: '2017', imgURL: '../../../assets/images/academicWriting.jpg' },
    { name: 'Writing Tips', number: '2', edition: '2013', imgURL: '../../../assets/images/writingTip.png' },
    { name: 'Barrons TOEFL iBT', number: '5', edition: '2016', imgURL: '../../../assets/images/barronsTOEFL.jpg' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

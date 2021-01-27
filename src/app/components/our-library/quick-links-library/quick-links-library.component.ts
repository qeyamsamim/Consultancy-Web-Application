import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-links-library',
  templateUrl: './quick-links-library.component.html',
  styleUrls: ['./quick-links-library.component.css']
})
export class QuickLinksLibraryComponent implements OnInit {

  links = [
    {
      title: 'Library Rules',
      text: 'There are some rules in the library that everyone should follow. These rules are to prevent any kind of damage to the '+
      'library resources. We always try out best to improve',
      url: '',
      imgURL: '../../../assets/images/news5.JPG',
      alt: 'link1'
    },
    {
      title: 'Workshop on Academic Writing',
      text: 'We will held an extensive workshop on academic writing in the library. This workshop is open for all who wants to '+
      'improve their writing skills',
      url:'',
      imgURL: '../../../assets/images/news2.JPG',
      alt: 'link2'
    },
    {
      title: 'New Books in Library',
      text: 'Recently, around 20 books were donated to our library. These are totally new books which were given to our library by '+
      'one of our old partners',
      url: '',
      imgURL: '../../../assets/images/news4.JPG',
      alt: 'link3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

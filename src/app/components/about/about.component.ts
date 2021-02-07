import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutItems = [
    {
      title: 'Who We Are',
      content: 'Our center is one of the prestigous educational consultancy in the region. It was established a decade ago and was open '+
      'for consultation for more than thousands of students. This center provides different services for students with different education '+
      'level. Students can find different facilities here. They can study in a quiet learning environment together with other students or '+
      'their friends. Our staff is always more than happy to help visitors. Our center is one of the prestigous educational consultancy in the '+
      'region. It was established a decade ago and was open for consultation for more than thousands of students. This center provides '+
      'different services for students with different education level. Students can find different facilities here. They can study in a '+
      'quiet learning environment together with other students or their friends. Our staff is always more than happy to help visitors. '+
      'You can also join the visitors and other students who always come to your center. You can come and study here to improve you '+
      'skills and advance your knowledge for a successful futures.'
    },
    {
      title: 'Our Mission',
      content: 'To give all students the opportunity to broaden their horizons, improve their language skills and fulfil their individual '+
      'academic ambitions by following the education path that suits them best.app-advising-form center is one of the prestigous educational '+
      'consultancy in the region. It was established a decade ago and was open for consultation for more than thousands of students. This '+
      'center provides different services for students with different education level. Students can find different facilities here. They '+
      'can study in a quiet learning environment together with other students or their friends. Our staff is always more than happy '+
      'to help visitors. Our center is one of the prestigous educational consultancy in the region. It was established a decade ago and '+
      'was open for consultation for more than thousands of students. This center provides different services for students with different '+
      'education level. Students can find different facilities here. They can study in a quiet learning environment together with '+
      'other students or their friends. Our staff is always more than happy to help visitors.'
    },
    {
      title: 'Our Value',
      content: 'Our global team of highly qualified Education Consultants will always provide honest, reliable and unbiased advice which '+
      'will be individually tailored to meet the needs of every student. Our center is one of the prestigous educational consultancy in the '+
      'region. It was established a decade ago and was open for consultation for more than thousands of students. This center provides '+
      'different services for students with different education level. Students can find different facilities here. They can study in a '+
      'quiet learning environment together with other students or their friends. Our staff is always more than happy to help visitors. '+
      'Our center is one of the prestigous educational consultancy in the region. It was established a decade ago and was open '+
      'for consultation for more than thousands of students. This center provides different services for students with different '+
      'education level. Students can find different facilities here. They can study in a quiet learning environment together with '+
      'other students or their friends. Our staff is always more than happy to help visitors.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

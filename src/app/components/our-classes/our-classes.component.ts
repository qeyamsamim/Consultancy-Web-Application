import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-classes',
  templateUrl: './our-classes.component.html',
  styleUrls: ['./our-classes.component.css']
})
export class OurClassesComponent implements OnInit {

  links = [
    { title: 'Need to take TOEFL', content: 'Our center is one of the authorized TOEFL iBT testing services. Click here if you want to know more about us.' },
    { title: 'We provide the best Advising', content: 'With more than 10 years of providing educational advising for students, we are always open to students.' },
    { title: 'If you have any questions, contact us', content: 'Contact us and will get back to you very soon. We always welcome and are open to any suggestion and innovative ideas.' },
    { title: 'Library', content: 'If you need a quiet palce for studying, our library is the right place for you. You are always welcomed to our library.' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

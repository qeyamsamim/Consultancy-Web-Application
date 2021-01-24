import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.css']
})
export class QuickLinksComponent implements OnInit {

  subNavItems = [
    { title: 'For High School Students', uRL: '/services' },
    { title: 'For Undergraduate Students', uRL: '/services' },
    { title: 'For Graduate Students', uRL: '/services' }
  ];

  consutancyGoal = 'This center was built in 2011 in Kabul, Afghanistan. Our aim is to provide assistance for top students to continue their higher education. Additionally, it is the best place for students to come and study. This center was built in 2011 in Kabul, Afghanistan. Our aim is to provide assistance for top students to continue their higher education. Additionally, it is the best place for students to come and study. This center was built in 2011 in Kabul, Afghanistan. Our aim is to provide assistance for top students to continue their higher education. Additionally, it is the best place for students to come and study. This center was built in 2011 in Kabul, Afghanistan. Our aim is to provide assistance for top students to continue their higher education. Additionally, it is the best place for students to come and study. This center was built in 2011 in Kabul, Afghanistan. Our aim is to provide assistance for top students to continue their higher education. Additionally, it is the best place for students to come and study.';
  mainTitle = 'With more than 1000 advisee, we are one of the best advising center in Kabul, Afghanistan';

  quickLinksTitle = 'Quick Links';
  quickLinksItems = [
    { title: 'About Consultancy', uRL: '/about'},
    { title: '5 Tips to a prepare a strong application', uRL: '/services'},
    { title: 'Need Advising?', uRL: '/services'},
    { title: 'Our representatives in provinces', uRL: '/contact'},
    { title: 'Classes offered at our Center', uRL: '/classes'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

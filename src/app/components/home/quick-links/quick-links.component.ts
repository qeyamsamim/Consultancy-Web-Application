import { Component, OnInit } from '@angular/core';

import { QuickLinks } from '../../../models/quick-links.model';
import { QuickLinksService } from '../../../services/quick-links.service';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.css'],
  providers: [ QuickLinksService ]
})
export class QuickLinksComponent implements OnInit {

  subNavItems = [
    { title: 'For High School Students', uRL: '/services' },
    { title: 'For Undergraduate Students', uRL: '/services' },
    { title: 'For Graduate Students', uRL: '/services' }
  ];

  mainTitle = 'With more than 1000 advisee, we are one of the best advising center in Kabul, Afghanistan';
  consutancyGoal = 'This center was built in 2011 in Kabul, Afghanistan. Our aim is to provide assistance for top students to continue '+
  'their higher education. Additionally, it is the best place for students to come and study. This center was built in 2011 in Kabul, '+
  'Afghanistan. We want to provide the best services for students to continue their higher education. Additionally, it is the best '+
  'place for students to come and study. This center was built in 2011 in Kabul, Afghanistan. Our aim is to provide assistance for '+
  'top students to continue their higher education. Additionally, it is the best place for students to come and study. This center was '+
  'built in 2011 in Kabul, Afghanistan. Our aim is to provide assistance for top students to continue their higher education. Come and '+
  'Additionally, it is the best place for students to come and study. This center was built in 2011 in Kabul, Afghanistan. Our aim '+
  'is to provide assistance for top students to continue their higher education. Additionally, it is the best place for students to '+
  'come and study.';

  quickLinksTitle = 'Quick Links';

  quickLinks: QuickLinks[] = [];

  constructor(
    private quickLinksService: QuickLinksService
  ) { }

  ngOnInit(): void {
    this.quickLinks = this.quickLinksService.getQuickLinks();
  }

}

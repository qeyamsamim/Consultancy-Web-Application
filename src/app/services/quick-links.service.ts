import { QuickLinks } from "../models/quick-links.model";

export class QuickLinksService {
  quickLinks: QuickLinks[] = [
    new QuickLinks(
      'About Consultancy',
      '',
      '/about',
      'home'
    ),
    new QuickLinks(
      '5 Tips to a prepare a strong application',
      '',
      '/services',
      'home'
    ),
    new QuickLinks(
      'Need Advising?',
      '',
      '/services',
      'home'
    ),
    new QuickLinks(
      'Our representatives in provinces',
      '',
      '/contact',
      'home'
    ),
    new QuickLinks(
      'Classes offered at our Center',
      '',
      '/classes',
      'home'
    ),
    new QuickLinks(
      'Ready for your TOEFL test',
      'Our center is one of the authorized TOEFL iBT testing services. Click here if you want to know more about us.',
      '/toefl-ibt',
      'class'
    ),
    new QuickLinks(
      'We provide the best Advising',
      'With more than 10 years of providing educational advising for students, we are always open to students.',
      '/services',
      'class'
    ),
    new QuickLinks(
      'If you have any questions, contact us',
      'Contact us and will get back to you very soon. We always welcome and are open to any suggestion and innovative ideas.',
      '/contact',
      'class'
    ),
    new QuickLinks(
      'Library is a good place to study',
      'If you need a quiet palce for studying, our library is the right place for you. You are always welcomed to our library.',
      '/library',
      'class'
    )
  ];

  getQuickLinks() {
    return this.quickLinks.filter((links) => links.category === 'home');
  }

  getClassQuickLinks() {
    return this.quickLinks.filter((links) => links.category === 'class');
  }
}

import { Subject } from 'rxjs';
import { QuickLinks } from "../models/quick-links.model";

export class QuickLinksService {

  quickLinksChanged = new Subject<QuickLinks[]>();
  private quickLinks: QuickLinks[] = [
    new QuickLinks(
      'About Consultancy',
      '',
      '',
      '/about',
      'home'
    ),
    new QuickLinks(
      '5 Tips to a prepare a strong application',
      '',
      '',
      '/news-events',
      'home'
    ),
    new QuickLinks(
      'Need Advising?',
      '',
      '',
      '/services',
      'home'
    ),
    new QuickLinks(
      'Our representatives in provinces',
      '',
      '',
      '/contact',
      'home'
    ),
    new QuickLinks(
      'Classes offered at our Center',
      '',
      '',
      '/classes',
      'home'
    ),
    new QuickLinks(
      'Ready for your TOEFL test',
      'Our center is one of the authorized TOEFL iBT testing services. Click here if you want to know more about us. Come here and '+
      'we are always here to help you. Come to our center and get the most out his incredible opportunity. Our center is one the '+
      'authorized ETS testing center. Here we provide',
      '',
      '/toefl-ibt',
      'class'
    ),
    new QuickLinks(
      'We provide the best Advising',
      'With more than 10 years of providing educational advising for students, we are always open to students. It is one of the '+
      'things we have always foloowed and will promote it further. Here you should always come and scheduale an appointment with '+
      'our advisor to get the right advice for your future destination.',
      '',
      '/services',
      'class'
    ),
    new QuickLinks(
      'If you have any questions, contact us',
      'Contact us and will get back to you very soon. We always welcome and are open to any suggestion and innovative ideas. The '+
      'main thing we should always go for and come to see and get the most of this opportunity is build. Please feel free to contact '+
      'us through the form which is available on the contact page.',
      '',
      '/contact',
      'class'
    ),
    new QuickLinks(
      'Library is a good place to study',
      'If you need a quiet palce for studying, our library is the right place for you. You are always welcomed to our library. We '+
      'have always learned from people around that there are more important things for you to learn and get the most of this opportunity '+
      'in our center.',
      '',
      '/library',
      'class'
    ),
    new QuickLinks(
      'If you have any questions, contact us',
      'Contact us and will get back to you very soon. We always welcome and are open to any suggestion and innovative ideas. Now '+
      'here are the more accurate and precise steps for you to learn and get education to have a bright future. There is a form '+
      'available on the contact page that you can fill and send to us.',
      '',
      '/contact',
      'class'
    ),
    new QuickLinks(
      'Contact Us',
      '',
      '../../../assets/images/contact.JPG',
      '/contact',
      'about'
    ),
    new QuickLinks(
      'Find the Latest News',
      '',
      '../../../assets/images/latestNews.JPG',
      '/news-events',
      'about'
    ),
    new QuickLinks(
      'Find us on Social Media',
      '',
      '../../../assets/images/socialMedia.JPG',
      '/contact',
      'about'
    ),
    new QuickLinks(
      'Find about the Latest Events',
      '',
      '../../../assets/images/latestNews.JPG',
      '/contact',
      'about'
    )
  ];

  getQuickLink() {
    return this.quickLinks.slice();
  }

  getQuickLinks() {
    return this.quickLinks.filter((links) => links.category === 'home');
  }

  getClassQuickLinks() {
    return this.quickLinks.filter((links) => links.category === 'class');
  }

  getAboutQuickLinks() {
    return this.quickLinks.filter((links) => links.category === 'about');
  }

  addQuickLinks(quickLink: QuickLinks) {
    this.quickLinks.push(quickLink);
    this.quickLinksChanged.next(this.quickLinks.slice());
  }
}

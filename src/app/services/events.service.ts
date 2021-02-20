import { Event } from '../models/event.model';

export class EventsService {
  private events: Event[] = [
    new Event(
      'French Scholarship Information Session',
      'Online',
      'Graduate',
      new Date(),
      new Date(),
      new Date(),
      'Consultancy Center',
      '../../../assets/images/news3.JPG',
      'frenchEvent',
      '/news-events',
    ),
    new Event(
      'IELTS Information Session',
      'Online',
      'Undergraduate & Grduate',
      new Date(),
      new Date(),
      new Date(),
      'Consultancy Center',
      '../../../assets/images/news2.JPG',
      'ieltsEvent',
      '/news-events',
    ),
    new Event(
      'Score Higher on TOEFL',
      'Offline',
      'Undergraduate & Grduate',
      new Date(),
      new Date(),
      new Date(),
      'Consultancy Center',
      '../../../assets/images/news4.JPG',
      'toeflScore',
      '/news-events',
    ),
    new Event(
      'Study USA Guide',
      'Online',
      'Undergraduate & Grduate',
      new Date(),
      new Date(),
      new Date(),
      'Consultancy Center',
      '../../../assets/images/news5.JPG',
      'studyUSA',
      '/news-events'
    ),
    new Event(
      'Writing a strong Personal Statement',
      'Online',
      'Undergraduate & Grduate',
      new Date(),
      new Date(),
      new Date(),
      'Consultancy Center',
      '../../../assets/images/news5.JPG',
      'personalStatement',
      '/news-events'
    ),
    new Event(
      'How to choose a study Program',
      'Offline',
      'Undergraduate',
      new Date(),
      new Date(),
      new Date(),
      'Consultancy Center',
      '../../../assets/images/news1.JPG',
      'chooseProgram',
      '/news-events'
    )
  ];

  getEvents() {
    return this.events.slice();
  }

  getFeaturedEvents() {
    return this.events.filter((events, index) => index < 2);
  }
}

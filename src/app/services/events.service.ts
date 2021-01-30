export class EventsService {
  private events = [
    {
      title: 'French Scholarship Information Session',
      day: '21',
      month: 'Jan',
      year: '2021',
      time: '10am - 12am',
      type: 'Online',
      category: 'Graduate',
      place: 'Consultancy Center',
      register: 'Click here to Register',
      url: '/news-events',
      imgURL: '../../../assets/images/news3.JPG'
    },
    {
      title: 'IELTS Information Session',
      day: '10',
      month: 'Jan',
      year: '2021',
      time: '1pm - 3pm',
      type: 'Online',
      category: 'Undergraduate & Grduate',
      place: 'Consultancy Center',
      register: 'Click here to Register',
      url: '/news-events',
      imgURL: '../../../assets/images/news2.JPG'
    },
    {
      title: 'Score Higher on TOEFL',
      day: '10',
      month: 'Jan',
      year: '2021',
      time: '1pm - 3pm',
      type: 'Offline',
      category: 'Undergraduate & Grduate',
      place: 'Consultancy Center',
      register: 'Click here to Register',
      url: '/news-events',
      imgURL: '../../../assets/images/news4.JPG'
    },
    {
      title: 'Study USA Guide',
      day: '10',
      month: 'Jan',
      year: '2021',
      time: '1pm - 3pm',
      type: 'Online',
      category: 'Undergraduate & Grduate',
      place: 'Consultancy Center',
      register: 'Click here to Register',
      url: '/news-events',
      imgURL: '../../../assets/images/news5.JPG'
    },
    {
      title: 'Writing a strong Personal Statement',
      day: '11',
      month: 'Feb',
      year: '2021',
      time: '2pm - 4pm',
      type: 'Online',
      category: 'Undergraduate & Grduate',
      place: 'Consultancy Center',
      register: 'Click here to Register',
      url: '/news-events',
      imgURL: '../../../assets/images/news5.JPG'
    },
    {
      title: 'How to choose a study Program',
      day: '13',
      month: 'Feb',
      year: '2021',
      time: '2pm - 4pm',
      type: 'Offline',
      category: 'Undergraduate',
      place: 'Consultancy Center',
      register: 'Click here to Register',
      url: '/news-events',
      imgURL: '../../../assets/images/news1.JPG'
    }
  ];

  getEvents() {
    return this.events.slice();
  }

  getFeaturedEvents() {
    return this.events.filter((events, index) => index < 2);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-events',
  templateUrl: './news-events.component.html',
  styleUrls: ['./news-events.component.css']
})
export class NewsEventsComponent implements OnInit {

  newsItems = [
    {
      title: 'New Classes Beign Offered',
      date: 'November 12, 2020',
      text: 'This is a wider card with supporting text this does whatever doing in this world because I also do not however you'
      + 'should be kind of carefull know. below This is a wider card with supporting text below as a natural lead-in to This is'
      + 'to give you additional information However, there are some very important points that everyone should think of very carefully'
      + 'content. This is a wider card with supporting text below as a natural lead-in to Now you can trust us for a very good service'
      + 'offered by our center additional content. This is a wider card with supporting text below as a natural we are very carefull'
      + 'with our serviceslead-in to additional content. This is a wider card with supporting text below as a natural lead-in to'
      + 'additional content. So therefore get ready and use the best opportunities that can help',
      imgURL: '../../../assets/images/home3.JPG',
      uRL: ''
    },
    {
      title: 'New Books in our Library',
      date: 'January 10, 2021',
      text: 'This is a wider card with supporting text this does whatever doing in this world because I also do not however you'
      + 'should be kind of carefull know. below This is a wider card with supporting text below as a natural lead-in to This is'
      + 'to give you additional information However, there are some very important points that everyone should think of very carefully'
      + 'content. This is a wider card with supporting text below as a natural lead-in to Now you can trust us for a very good service'
      + 'offered by our center additional content. This is a wider card with supporting text below as a natural we are very carefull'
      + 'with our serviceslead-in to additional content. This is a wider card with supporting text below as a natural lead-in to'
      + 'additional content. What really is interesting about this center is that this provides the best.',
      imgURL: '../../../assets/images/home2.JPG',
      uRL: ''
    },
    {
      title: 'Additional TOEFL iBT tests offered',
      date: 'January 02, 2021',
      text: 'This is a wider card with supporting text this does whatever doing in this world because I also do not however you'
      + 'should be kind of carefull know. below This is a wider card with supporting text below as a natural lead-in to This is'
      + 'to give you additional information However, there are some very important points that everyone should think of very carefully'
      + 'content. This is a wider card with supporting text below as a natural lead-in to Now you can trust us for a very good service'
      + 'offered by our center additional content. This is a wider card with supporting text below as a natural we are very carefull'
      + 'with our serviceslead-in to additional content. This is a wider card with supporting text below as a natural lead-in to'
      + 'additional content. We guarantee the best services that you can find ever',
      imgURL: '../../../assets/images/home1.JPG',
      uRL: ''
    },
    {
      title: 'Online Classes to be Offered by Our Center',
      date: 'January 30, 2021',
      text: 'This is a wider card with supporting text this does whatever doing in this world because I also do not however you'
      + 'should be kind of carefull know. below This is a wider card with supporting text below as a natural lead-in to This is'
      + 'to give you additional information However, there are some very important points that everyone should think of very carefully'
      + 'content. This is a wider card with supporting text below as a natural lead-in to Now you can trust us for a very good service'
      + 'offered by our center additional content. This is a wider card with supporting text below as a natural we are very carefull'
      + 'with our serviceslead-in to additional content. This is a wider card with supporting text below as a natural lead-in to'
      + 'additional content. We guarantee the best services that you can find ever',
      imgURL: '../../../assets/images/news2.JPG',
      uRL: ''
    },
    {
      title: 'Our Center Introduced New Partnership with A University',
      date: 'January 05, 2021',
      text: 'This is a wider card with supporting text this does whatever doing in this world because I also do not however you'
      + 'should be kind of carefull know. below This is a wider card with supporting text below as a natural lead-in to This is'
      + 'to give you additional information However, there are some very important points that everyone should think of very carefully'
      + 'content. This is a wider card with supporting text below as a natural lead-in to Now you can trust us for a very good service'
      + 'offered by our center additional content. This is a wider card with supporting text below as a natural we are very carefull'
      + 'with our serviceslead-in to additional content. This is a wider card with supporting text below as a natural lead-in to'
      + 'additional content. We guarantee the best services that you can find ever',
      imgURL: '../../../assets/images/news4.JPG',
      uRL: ''
    }
  ];

  eventsItems = [
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
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

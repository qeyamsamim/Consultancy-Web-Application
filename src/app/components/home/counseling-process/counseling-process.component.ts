import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counseling-process',
  templateUrl: './counseling-process.component.html',
  styleUrls: ['./counseling-process.component.css']
})
export class CounselingProcessComponent implements OnInit {

  processItems = [
    {
      number: '1',
      title: 'Set an Appointment',
      imgURL: '../../assets/icons/appointment.png',
      alt: 'appointment'
    },
    {
      number: '2',
      title: 'Identify Course, Country & University',
      imgURL: '../../assets/icons/search.png',
      alt: 'identifyCourse'
    },
    {
      number: '3',
      title: 'International Test Preparation',
      imgURL: '../../assets/icons/test.png',
      alt: 'testPrep'
    },
    {
      number: '4',
      title: 'Application Editing & Processing',
      imgURL: '../../assets/icons/application.png',
      alt: 'application'
    },
    {
      number: '5',
      title: 'Visa & Pre-departure',
      imgURL: '../../assets/icons/departure.png',
      alt: 'visa'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

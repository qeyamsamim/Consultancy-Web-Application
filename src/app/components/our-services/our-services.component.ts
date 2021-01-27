import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {

  services = [
    {
      title: 'Our Library',
      content: 'This is a great library which has many different resources. You can different kinds of books here. You can study in '+
      'a quiet place. All you need is come to our library and get the most out of the best learning environment. This is a great '+
      'library which has many different resources. You can different kinds of books here. You can study in a quiet place.',
      linkWord: ' Our Library',
      url: '/library'
    },
    {
      title: 'Authorized ETS Testing Center',
      content: 'This is a great library which has many different resources. You can different kinds of books here. You can study in '+
      'a quiet place. We are always happy to welcome you in our library. You can refer to our library section and check for books. '+
      'This is a great library which has many different resources. You can different kinds of books here. You can study in a quiet '+
      'place.',
      linkWord: 'TOEFL',
      url: '/classes'
    },
    {
      title: 'Test Preparation Classes',
      content: 'This is a great library which has many different resources. You can different kinds of books here. You can study in '+
      'a quiet place. We are always happy to welcome you in our library. You can refer to our library section and check for books. '+
      'This is a great library which has many different resources. You can different kinds of books here. You can study in a quiet '+
      'place.',
      linkWord: 'Classes',
      url: '/classes'
    },
    {
      title: 'Educational Advising',
      content: 'We provide the best educational consultancy services. Students can set an appointment with our advisor and discuss '+
      'everything in details. We have trained more than hundreds of students since 2011.',
      linkWord: '',
      url: ''
    }
  ];

  councilingProcess = [
    {
      title: 'Appointment',
      content: 'You can always set an appointment with our advisor. You just need to fill out the form and then we will continue '+
      'regarding the time and date of the appointment. Please carefully fill the form. You can always set an appointment with our '+
      'advisor. You just need to fill out the form and then we will continue regarding the time and date of the appointment. Please '+
      'carefully fill the form.'
    },
    {
      title: 'Search for Programms',
      content: 'The second step in our counceling process is search for programms based on your level of education and background. Our '+
      'advisor will help you identify you course of study for your prefered level of study. The second step in our counceling process '+
      'is search for programms based on your level of education and background. Our advisor will help you identify you course of study'
    },
    {
      title: 'Test Preparation',
      content: 'In this step you will start your preparation for official and standardized tests like TOEFL, IELTS, SAT, or GRE. You '+
      'visit the classes page and find more information about the details of each class. Not to mention there will be a placement test '+
      'that you should take before enrolling to our classes. You can go to classes page and read more about the time and date of tests.'
    },
    {
      title: 'Application',
      content: 'The third step is working on your application. Editing and preparing application. After collecting all the required '+
      'documents and preparing for the international tests, you will be ready to work on your application. In this step you will be '+
      'working with our advisor in individual sections to prepare a strong application. We will also run information session about this.'
    },
    {
      title: 'Visa & Pre-departure',
      content: 'Our pre-departure support will help you prepare for your trip. It includes topics like how to learn a new language '+
      'how to prevent culture shock. Our pre-departure support will help you prepare for your trip. It includes topics like how to learn '+
      'a new language how to prevent culture shock.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

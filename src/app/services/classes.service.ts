import { OurClass } from "../models/class.model";

export class ClassesService {

  private classes: OurClass[] = [
    new OurClass(
      'TOEFL iBT Preparation Class',
      'This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce ' +
      'students to strategies and skills that will help them do their best and have an outstadning performance on the actual test '+
      ' in order to succeed on the TOEFL iBT and get their desired score. This course aims to introduce students to strategies and '+
      'This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce ' +
      'students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce students to strategies and '+
      'This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce ' +
      'all students who will register and enroll into this course to strategies and skills to succeed on the TOEFL iBT. We also help '+
      'them to feel the actual test environment through practice test. This course aims to introduce students to strategies and '+
      'skills to succeed on the TOEFL iBT. This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT.',
      ['Introduction to TOEFL', 'Necessary skills for the Test', 'Practice Test 1', 'Topic 4', 'Topic 5', 'Topic 6'],
      ['Saturday 4:00 pm to 6:00 pm', 'Monday 4:00 pm to 6:00 pm', 'Wednesday 4:00 pm to 6:00 pm'],
      'Ahmad Mohammad',
      'toefliBT',
      'nav-toefl'
    ),
    new OurClass(
      'IELTS Preparation Class',
      'This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce ' +
      'students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce students to strategies and '+
      'This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce ' +
      'students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce students to strategies and '+
      'This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce ' +
      'students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce students to strategies and '+
      'skills to succeed on the TOEFL iBT. This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT.',
      ['Introduction to IELTS', 'Necessary skills for the Test', 'Practice Test 1', 'Strategies for Reading', 'Practice Test 2', 'Practice Test 3'],
      ['Sunday 5:00 pm to 7:00 pm', 'Tuesday 5:00 pm to 7:00 pm', 'Thrusday 5:00 pm to 7:00 pm'],
      'Ahmad Mohammad',
      'IELTS',
      'nav-ielts'
    ),
    new OurClass(
      'SAT Preparation Class',
      'This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce ' +
      'students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce students to strategies and '+
      'skills to succeed on the TOEFL iBT. This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT.',
      ['Introduction to TOEFL', 'Necessary skills for the Test', 'Practice Test 1'],
      ['Saturday 4:00 pm to 6:00 pm', 'Monday 4:00 pm to 6:00 pm', 'Wednesday 4:00 pm to 6:00 pm'],
      'Ahmad Mohammad',
      'sat',
      'nav-sat'
    ),
    new OurClass(
      'GRE Preparation Class',
      'This course aims to introduce students to strategies and skills to succeed on GRE. This exam is one of the major requirements '+
      'for graduate programs. Anyonw willing to start their masters or postgraduate degree in one the top universities in US, Europe, '+
      'or Australlia, it is required to have a GRE score and send it to the their university. This course aims to introduce ' +
      'students to strategies and skills to succeed on the TOEFL iBT. Our center is also one of the authorized test centers for GRE '+
      'Applicants who want to take this test, can come to our center and register for this preparatory course. This course aims to '+
      'introduce students to strategies and skills which are necessary to get a high score on Graduate Record Exam and increase their '+
      'skills to succeed on the TOEFL iBT. This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT.',
      ['Introduction to TOEFL', 'Necessary skills for the Test', 'Practice Test 1'],
      ['Saturday 4:00 pm to 6:00 pm', 'Monday 4:00 pm to 6:00 pm', 'Wednesday 4:00 pm to 6:00 pm'],
      'Ahmad Mohammad',
      'gre',
      'nav-gre'
    ),
    new OurClass(
      'Academic English Class',
      'This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce ' +
      'students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce students to strategies and '+
      'skills to succeed on the TOEFL iBT. This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT.',
      ['Introduction to TOEFL', 'Necessary skills for the Test', 'Practice Test 1'],
      ['Saturday 4:00 pm to 6:00 pm', 'Monday 4:00 pm to 6:00 pm', 'Wednesday 4:00 pm to 6:00 pm'],
      'Ahmad Mohammad',
      'english',
      'nav-english'
    )
  ];

  getClass() {
    return this.classes.slice();
  }

}

import { OurClass } from "../models/class.model";

export class ClassesService {

  private classes: OurClass[] = [
    new OurClass(
      'TOEFL iBT Preparation Class',
      'This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce ' +
      'students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce students to strategies and '+
      'skills to succeed on the TOEFL iBT. This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT.',
      'Introduction to TOEFL, Necessary skills for the Test, and Practice Test 1',
      'Saturday, Monday, and Wednesday from 4:00 pm to 6:00 pm',
      'Ahmad Mohammad',
      'toefliBT',
      'nav-toefl'
    ),
    new OurClass(
      'IELTS Preparation Class',
      'This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce ' +
      'students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce students to strategies and '+
      'skills to succeed on the TOEFL iBT. This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT.',
      'Introduction to TOEFL, Necessary skills for the Test, and Practice Test 1',
      'Saturday, Monday, and Wednesday from 4:00 pm to 6:00 pm',
      'Ahmad Mohammad',
      'IELTS',
      'nav-ielts'
    ),
    new OurClass(
      'SAT Preparation Class',
      'This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce ' +
      'students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce students to strategies and '+
      'skills to succeed on the TOEFL iBT. This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT.',
      'Introduction to TOEFL, Necessary skills for the Test, and Practice Test 1',
      'Saturday, Monday, and Wednesday from 4:00 pm to 6:00 pm',
      'Ahmad Mohammad',
      'sat',
      'nav-sat'
    ),
    new OurClass(
      'GRE Preparation Class',
      'This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce ' +
      'students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce students to strategies and '+
      'skills to succeed on the TOEFL iBT. This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT.',
      'Introduction to TOEFL, Necessary skills for the Test, and Practice Test 1',
      'Saturday, Monday, and Wednesday from 4:00 pm to 6:00 pm',
      'Ahmad Mohammad',
      'gre',
      'nav-gre'
    ),
    new OurClass(
      'Academic English Class',
      'This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce ' +
      'students to strategies and skills to succeed on the TOEFL iBT. This course aims to introduce students to strategies and '+
      'skills to succeed on the TOEFL iBT. This course aims to introduce students to strategies and skills to succeed on the TOEFL iBT.',
      'Introduction to TOEFL, Necessary skills for the Test, and Practice Test 1',
      'Saturday, Monday, and Wednesday from 4:00 pm to 6:00 pm',
      'Ahmad Mohammad',
      'english',
      'nav-english'
    )
  ];

  getClass() {
    return this.classes.slice();
  }

}

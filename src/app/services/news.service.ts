import { News } from '../models/news.model';

export class NewsService {

  private news: News[] = [
    new News(
      'New Classes Beign Offered',
      'This is a wider card with supporting text this does whatever doing in this world because I also do not however you '+
      'should be kind of carefull know. below This is a wider card with supporting text below as a natural lead-in to This is '+
      'to give you additional information However, there are some very important points that everyone should think of very carefully '+
      'content. This is a wider card with supporting text below as a natural lead-in to Now you can trust us for a very good service '+
      'offered by our center additional content. This is a wider card with supporting text below as a natural we are very carefull '+
      'with our serviceslead-in to additional content. This is a wider card with supporting text below as a natural lead-in to '+
      'content. This is a wider card with supporting text below as a natural lead-in to Now you can trust us for a very good service '+
      'offered by our center additional content. This is a wider card with supporting text below as a natural we are very carefull '+
      'additional content. So therefore get ready and use the best opportunities that can help',
      'classes',
      new Date(),
      '../../../assets/images/home3.JPG',
      'newClasses'
    ),
    new News(
      'New Books in our Library',
      'This is a wider card with supporting text this does whatever doing in this world because I also do not however you '+
      'should be kind of carefull know. below This is a wider card with supporting text below as a natural lead-in to This is '+
      'to give you additional information However, there are some very important points that everyone should think of very carefully '+
      'content. This is a wider card with supporting text below as a natural lead-in to Now you can trust us for a very good service '+
      'offered by our center additional content. This is a wider card with supporting text below as a natural we are very carefull '+
      'with our serviceslead-in to additional content. This is a wider card with supporting text below as a natural lead-in to '+
      'offered by our center additional content. This is a wider card with supporting text below as a natural we are very carefull '+
      'with our serviceslead-in to additional content. This is a wider card with supporting text below as a natural lead-in to '+
      'additional content. What really is interesting about this center is that this provides the best.',
      'library',
      new Date(),
      '../../../assets/images/home2.JPG',
      'newBooks'
    ),
    new News(
      'Additional TOEFL iBT tests offered',
      'This is a wider card with supporting text this does whatever doing in this world because I also do not however you '+
      'should be kind of carefull know. below This is a wider card with supporting text below as a natural lead-in to This is '+
      'to give you additional information However, there are some very important points that everyone should think of very carefully '+
      'content. This is a wider card with supporting text below as a natural lead-in to Now you can trust us for a very good service '+
      'offered by our center additional content. This is a wider card with supporting text below as a natural we are very carefull '+
      'with our serviceslead-in to additional content. This is a wider card with supporting text below as a natural lead-in to '+
      'offered by our center additional content. This is a wider card with supporting text below as a natural we are very carefull '+
      'with our serviceslead-in to additional content. This is a wider card with supporting text below as a natural lead-in to '+
      'additional content. We guarantee the best services that you can find ever',
      'toefl',
      new Date(),
      '../../../assets/images/home1.JPG',
      'toeflTest'
    ),
    new News(
      'Our Center Introduced New Partnership with A University',
      'This is a wider card with supporting text this does whatever doing in this world because I also do not however you '+
      'should be kind of carefull know. below This is a wider card with supporting text below as a natural lead-in to This is '+
      'to give you additional information However, there are some very important points that everyone should think of very carefully '+
      'content. This is a wider card with supporting text below as a natural lead-in to Now you can trust us for a very good service '+
      'offered by our center additional content. This is a wider card with supporting text below as a natural we are very carefull '+
      'with our serviceslead-in to additional content. This is a wider card with supporting text below as a natural lead-in to '+
      'offered by our center additional content. This is a wider card with supporting text below as a natural we are very carefull '+
      'with our serviceslead-in to additional content. This is a wider card with supporting text below as a natural lead-in to '+
      'additional content. We guarantee the best services that you can find ever',
      'other',
      new Date(),
      '../../../assets/images/news4.JPG',
      'newPartner'
    ),
    new News(
      'Library Rules',
      'There are some rules in the library that everyone should follow. These rules are to prevent any kind of damage to the '+
      'library resources. We always try out best to improve. I just want to update people that these rules are just to keep all the '+
      'library resources safe and prevent any harm on them. So, please it is the reponsiblity of everyone to keep this in mind ' +
      'There are some rules in the library that everyone should follow. These rules are to prevent any kind of damage to the '+
      'library resources. We always try out best to improve. I just want to update people that these rules are just to keep all the '+
      'library resources safe and prevent any harm on them. So, please it is the reponsiblity of everyone to keep this in mind and '+
      'library resources. We always try out best to improve. I just want to update people that these rules are just to keep all the '+
      'library resources safe and prevent any harm on them. So, please it is the reponsiblity of everyone to keep this in mind and '+
      'there is something else that you should keep in mind that with every change, there will be a',
      'library',
      new Date(),
      '../../../assets/images/news5.JPG',
      'libraryRules'
    ),
    new News(
      'Workshop on Academic Writing',
      'We will held an extensive workshop on academic writing in the library. This workshop is open for all who wants to '+
      'improve their writing skills. This is open to everyone who want to participate and improve their writing skills including '+
      'students and everyone who want to apply to any scholarship and academic opportunities also those who prepare for tests. '+
      'We will held an extensive workshop on academic writing in the library. This workshop is open for all who wants to '+
      'improve their writing skills. This is open to everyone who want to participate and improve their writing skills including '+
      'students and everyone who want to apply to any scholarship and academic opportunities also those who prepare for tests. '+
      'improve their writing skills. This is open to everyone who want to participate and improve their writing skills including '+
      'students and everyone who want to apply to any scholarship and academic opportunities also those who prepare for tests. '+
      'This is what everyone expects to have but there many other things you should consider while ',
      'library',
      new Date(),
      '../../../assets/images/news2.JPG',
      'writingWorkshop'
    ),
    new News(
      'New Books in Library',
      'Recently, around 20 books were donated to our library. These are totally new books which were given to our library by '+
      'one of our old partners. They have donated these books to be used in the library. We always try to do our best to have '+
      'a very beneficial environment to study and improve you knowledge. Please you are always welcome to come here and use your '+
      'Recently, around 20 books were donated to our library. These are totally new books which were given to our library by '+
      'one of our old partners. They have donated these books to be used in the library. We always try to do our best to have '+
      'a very beneficial environment to study and improve you knowledge. Please you are always welcome to come here and use your '+
      'one of our old partners. They have donated these books to be used in the library. We always try to do our best to have '+
      'a very beneficial environment to study and improve you knowledge. Please you are always welcome to come here and use your '+
      'Recently, around 20 books were donated to our library. These are totally new books which were given to our library by ',
      'library',
      new Date(),
      '../../../assets/images/news4.JPG',
      'newBooks'
    ),
    new News(
      'A Complete Guide to Study USA',
      'We tell the opportunity to study in one of the top universities in USA. Come and join us. We tell the opportunity ' +
      'in order to study in one of the top universities in the USA which also offers a large amount of financial aid for students. '+
      'We tell the opportunity to study in one of the top universities in USA. Come and join us. We tell the opportunity' +
      'in order to study in one of the top universities in the USA which also offers a large amount of financial aid for students.'+
      'We tell the opportunity to study in one of the top universities in USA. Come and join us. We tell the opportunity' +
      'in order to study in one of the top universities in the USA which also offers a large amount of financial aid for students.'+
      'We tell the opportunity to study in one of the top universities in USA. Come and join us. We tell the opportunity' +
      'in order to study in one of the top universities in the USA which also offers a large amount of financial aid for students.',
      'studyAbroad',
      new Date(),
      '../../../assets/images/studyUS.jpg',
      'studyUSA'
    ),
    new News(
      '10 Reasons to study in Europe',
      'There are really good reasons if you want to continue your education in any country in Europe. There are really good '+
      'reasons if you want to continue in any of the European country in the Schengen zone which is a really great opportunity '+
      'There are really good reasons if you want to continue your education in any country in Europe. There are really good '+
      'reasons if you want to continue in any of the European country in the Schengen zone which is a really great opportunity '+
      'There are really good reasons if you want to continue your education in any country in Europe. There are really good '+
      'reasons if you want to continue in any of the European country in the Schengen zone which is a really great opportunity '+
      'There are really good reasons if you want to continue your education in any country in Europe. There are really good '+
      'reasons if you want to continue in any of the European country in the Schengen zone which is a really great opportunity',
      'studyAbroad',
      new Date(),
      '../../../assets/images/studyEurope.png',
      'studyEurope'
    ),
    new News(
      '8 Reasons to study in Australia',
      'Here are the reasons why to continue your education in Australia. They accept a considerable number of international '+
      'stduents.Here are the reasons why to continue your education in Australia. Here are the reasons and you can read them all '+
      'Here are the reasons why to continue your education in Australia. They accept a considerable number of international '+
      'stduents.Here are the reasons why to continue your education in Australia. Here are the reasons and you can read them all '+
      'reasons if you want to continue in any of the European country in the Schengen zone which is a really great opportunity '+
      'There are really good reasons if you want to continue your education in any country in Europe. There are really good '+
      'Here are the reasons why to continue your education in Australia. They accept a considerable number of international '+
      'stduents.Here are the reasons why to continue your education in Australia. Here are the reasons and you can read them all',
      'studyAbroad',
      new Date(),
      '../../../assets/images/studyAustralia.jpg',
      'studyAustralia'
    ),
    new News(
      'Person A',
      'Some quick example text to build on the card title and make up the bulk. This card belongs to the person 1. And there is '+
      'something I want to tell about this center. The people here are very friendly and kind. I strongly recommend everyone to '+
      'here and get the most out of their time to enjoy a very good learning learning environment. That is all. Thank you very much '+
      'Some quick example text to build on the card title and make up the bulk. This card belongs to the person 1. And there is '+
      'something I want to tell about this center. The people here are very friendly and kind. I strongly recommend everyone to '+
      'here and get the most out of their time to enjoy a very good learning learning environment. That is all. Thank you very much '+
      'something I want to tell about this center. The people here are very friendly and kind. I strongly recommend everyone to '+
      'here and get the most out of their time to enjoy a very good learning learning environment. That is all. Thank you very much ',
      'successStories',
      new Date(),
      '../../../assets/images/personA.JPG',
      'personA'
    ),
    new News(
      'Person B',
      'Some quick example text to build on the card title and make up the bulk. This card belongs to the person 1. And there is '+
      'something I want to tell about this center. The people here are very friendly and kind. I strongly recommend everyone to '+
      'here and get the most out of their time to enjoy a very good learning learning environment. That is all. Thank you very much '+
      'Some quick example text to build on the card title and make up the bulk. This card belongs to the person 1. And there is '+
      'something I want to tell about this center. The people here are very friendly and kind. I strongly recommend everyone to '+
      'Some quick example text to build on the card title and make up the bulk. This card belongs to the person 1. And there is '+
      'something I want to tell about this center. The people here are very friendly and kind. I strongly recommend everyone to '+
      'here and get the most out of their time to enjoy a very good learning learning environment. That is all. Thank you very much ',
      'successStories',
      new Date(),
      '../../../assets/images/personB.JPG',
      'personB'
    ),
    new News(
      'Person C',
      'Some quick example text to build on the card title and make up the bulk. This card belongs to the person 1. And there is '+
      'something I want to tell about this center. The people here are very friendly and kind. I strongly recommend everyone to '+
      'here and get the most out of their time to enjoy a very good learning learning environment. That is all. Thank you very much '+
      'Some quick example text to build on the card title and make up the bulk. This card belongs to the person 1. And there is '+
      'something I want to tell about this center. The people here are very friendly and kind. I strongly recommend everyone to '+
      'Some quick example text to build on the card title and make up the bulk. This card belongs to the person 1. And there is '+
      'something I want to tell about this center. The people here are very friendly and kind. I strongly recommend everyone to '+
      'here and get the most out of their time to enjoy a very good learning learning environment. That is all. Thank you very much ',
      'successStories',
      new Date(),
      '../../../assets/images/personC.JPG',
      'personC'
    ),
    new News(
      'Person D',
      'Some quick example text to build on the card title and make up the bulk. This card belongs to the person 1. And there is '+
      'something I want to tell about this center. The people here are very friendly and kind. I strongly recommend everyone to '+
      'here and get the most out of their time to enjoy a very good learning learning environment. That is all. Thank you very much '+
      'something I want to tell about this center. The people here are very friendly and kind. I strongly recommend everyone to '+
      'here and get the most out of their time to enjoy a very good learning learning environment. That is all. Thank you very much '+
      'Some quick example text to build on the card title and make up the bulk. This card belongs to the person 1. And there is '+
      'something I want to tell about this center. The people here are very friendly and kind. I strongly recommend everyone to '+
      'here and get the most out of their time to enjoy a very good learning learning environment. That is all. Thank you very much ',
      'successStories',
      new Date(),
      '../../../assets/images/personD.JPG',
      'personD'
    )
  ];

  getNews() {
    return this.news.slice();
  }

  getLibraryNews() {
    return this.news.filter((news) => news.category === 'library');
  }

  getFeaturedNews() {
    return this.news.filter((news, index) => index < 5);
  }

  getStudyAbroad() {
    return this.news.filter((news) => news.category === 'studyAbroad');
  }

  getSuccessStories() {
    return this.news.filter((news) => news.category === 'successStories');
  }

  getServiceNews() {
    return this.news.filter((news) => news.category === 'classes' || news.category === 'library');
  }

  constructor() { }
}

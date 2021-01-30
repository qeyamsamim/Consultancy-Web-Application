import { Book } from '../models/book.model';

export class BooksService {
  private books: Book[] = [
    new Book(
      'Barrons TOEFL iBT',
      '2016',
      5,
      '../../../assets/images/barronsTOEFL.jpg',
      'BarronsIBT'
    ),
    new Book(
      'Writing Tips',
      '2013',
      2,
      '../../../assets/images/writingTip.png',
      'writingTips'
    ),
    new Book(
      'Academic Writing',
      '2017',
      6,
      '../../../assets/images/academicWriting.jpg',
      'academicWriting'
    ),
    new Book(
      'Academic Writing Tips',
      '2013',
      8,
      '../../../assets/images/writingTip.png',
      'academicWritingTips'
    ),
    new Book(
      'Barrons TOEFL iBT',
      '2018',
      8,
      '../../../assets/images/barronsTOEFL.jpg',
      'academicWritingTips2'
    )
  ];

  getBooks() {
    return this.books.slice();
  }

}

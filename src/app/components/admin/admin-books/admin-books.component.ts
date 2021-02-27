import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.css']
})
export class AdminBooksComponent implements OnInit {

  books: Book[];
  search = '';

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
    this.booksService.booksChanged
      .subscribe(
        (book: Book[]) => {
          this.books = book;
        }
      )
  }

}

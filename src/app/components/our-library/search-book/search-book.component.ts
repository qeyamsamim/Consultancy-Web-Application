import { Component, OnInit } from '@angular/core';

import { Book } from '../../../models/book.model';

import { BooksService } from '../../../services/books.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css'],
  providers: [BooksService]
})
export class SearchBookComponent implements OnInit {

  books: Book[];

  constructor( private booksService: BooksService ) { }

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

}

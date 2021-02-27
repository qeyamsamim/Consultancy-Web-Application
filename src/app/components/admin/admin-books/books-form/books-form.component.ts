import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css', '../../admin.component.css']
})
export class BooksFormComponent implements OnInit {

  booksForm: FormGroup;

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit(): void {
    this.booksForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'edition': new FormControl(null, Validators.required),
      'number': new FormControl(null, Validators.required),
      'imgURL': new FormControl(null, Validators.required),
      'alt': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const value = this.booksForm.value;
    const newBook = new Book(
      value.name,
      value.edition,
      value.number,
      value.imgURL,
      value.alt
    )
    this.booksService.addBooks(newBook);
    this.booksForm.reset();
  }

}

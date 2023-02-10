import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent {
  @Input() books: ReadonlyArray<IBook> = [];
  @Output() add = new EventEmitter<string>();
}

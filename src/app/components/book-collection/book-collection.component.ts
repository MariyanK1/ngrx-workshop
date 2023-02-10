import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<IBook> = [];
  @Output() remove = new EventEmitter<string>();
}

import { createReducer, on } from '@ngrx/store';
import { IBook } from '../book-list/book.model';

import { BooksApiActions } from './book.actions';

export const initialState: ReadonlyArray<IBook> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
);

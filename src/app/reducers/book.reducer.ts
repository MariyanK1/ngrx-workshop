import { createReducer, on } from '@ngrx/store';

import { IBook } from '../models/book.model';

import { BooksApiActions } from '../actions/book.actions';

export const initialState: ReadonlyArray<IBook> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
);

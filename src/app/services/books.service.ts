import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IBook } from '../models/book.model';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  private readonly URL =
    'https://www.googleapis.com/books/v1/volumes?maxResults=10&orderBy=relevance&q=oliver%20sacks';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Array<IBook>> {
    return this.http
      .get<{ items: IBook[] }>(this.URL)
      .pipe(map((books) => books.items || []));
  }
}

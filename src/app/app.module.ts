import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { BookCollectionComponent } from './components/book-collection/book-collection.component';
import { collectionReducer } from './reducers/collection.reducer';
import { counterReducer } from './reducers/counter.reducer';
import { booksReducer } from './reducers/book.reducer';
import { GoogleBooksService } from './services/books.service';

@NgModule({
  declarations: [AppComponent, BookListComponent, BookCollectionComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      books: booksReducer,
      collection: collectionReducer,
      count: counterReducer,
    }),
    HttpClientModule,
    MyCounterComponent,
  ],
  providers: [GoogleBooksService],
  bootstrap: [AppComponent],
})
export class AppModule {}

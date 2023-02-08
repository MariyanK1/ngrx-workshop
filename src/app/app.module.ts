import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { collectionReducer } from './state/collection.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { booksReducer } from './state/book.reducer';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-list/book-collection.component';
import { HttpClientModule } from '@angular/common/http';
import { counterReducer } from './counter.reducer';

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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

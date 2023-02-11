import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { MyCounterComponent } from 'src/app/components/my-counter/my-counter.component';
import { BookCollectionComponent } from 'src/app/components/book-collection/book-collection.component';
import { BookListComponent } from 'src/app/components/book-list/book-list.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, BookCollectionComponent, BookListComponent],
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        MyCounterComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

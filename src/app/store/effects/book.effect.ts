import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { BooksService } from '../../services/books.service';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import * as fromActions from '../actions';
import { GetCriteria } from '../selectors/book.selector';
import { map, switchMap, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class BookEffects {

  handlingError(httpError: HttpErrorResponse) {
    const {error: {errors: {messages}}} = httpError;
    return of(fromActions.FailedBooks({ error: {message: messages} }))
  }

  loadingBooks$ = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.LoadingSearchBooks),
      concatLatestFrom(() => this.store.select(GetCriteria)),
      switchMap(([, criteria]) => {
        if (criteria.inputSearch !== '') {
          return this.bookService
          .getBooksByCriteria(criteria)
          .pipe(
            map((books) => fromActions.GetSearchedBooks({ books })),
            catchError(this.handlingError)
          )
        }

        return this.bookService
          .getAllBooks()
          .pipe(
            map((books) => fromActions.GetSearchedBooks({ books })),
            catchError(this.handlingError)
          )
      })
    )
  );

  constructor(
    private store: Store<AppState>,
    private bookService: BooksService,
    private actions: Actions
  ) {}
}

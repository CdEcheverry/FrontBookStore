import { AppState } from '../app.reducer';
import { createSelector } from '@ngrx/store';
import { BookState } from '../reducers/book.reducer';

const getBookState = (state: AppState) => state.books;

export const GetCriteria = createSelector(
  getBookState,
  (state: BookState) => state.criteria
);

export const GetStatusBook = createSelector(
  getBookState,
  (state: BookState) => state.status
);

export const GetBooks = createSelector(
  getBookState,
  (state: BookState) => state.books
);


export const GetErrorMessage = createSelector(
  getBookState,
  (state: BookState) => state?.error?.message || ''
);

import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/models/book.model';

enum BookActionsType {
  ChangeSearchCriteria = '[BOOK] Change search Criteria',
  LoadingSearchBooks = '[BOOK] Loading search',
  GetSearchedBooks = '[BOOK] Getting searched books',
  FailedBooks = '[BOOK] Error getting searched books',
}

export const ChangeSearchCriteria = createAction(
  BookActionsType.ChangeSearchCriteria,
  props<{ typeSearch?: {name: string, id: string }; inputSearch?: string }>()
);

export const LoadingSearchBooks = createAction(
  BookActionsType.LoadingSearchBooks
);

export const GetSearchedBooks = createAction(
  BookActionsType.GetSearchedBooks,
  props<{ books: Book[] }>()
);


export const FailedBooks = createAction(
  BookActionsType.FailedBooks,
  props<{ error: {message: string} }>()
);
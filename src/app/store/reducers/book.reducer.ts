import { createReducer, Action, on } from '@ngrx/store';
import { Criteria } from 'src/app/models/criteria.model';
import * as bookActions from '../actions/book.action';
export interface BookState {
  status: 'loading' | 'completed' | 'failed' | 'started';
  books: any[];
  criteria: Criteria;
  error: {message: string | null}
}

const initState: BookState = {
  status: 'started',
  books: [],
  criteria: {
    inputSearch: '',
    typeSearch: {name: 'Titulo', id: 'Tittle'},
  },
  error: {message: null}
};

const reducer = createReducer(
  initState,
  on(bookActions.LoadingSearchBooks, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(
    bookActions.ChangeSearchCriteria,
    (state, { typeSearch, inputSearch }) => ({
      ...state,
      criteria: {
        typeSearch: typeSearch || state.criteria.typeSearch,
        inputSearch: inputSearch || "",
      },
    })
  ),
  on(bookActions.GetSearchedBooks, (state, { books }) => ({
    ...state,
    books,
    status: 'completed',
  })),
  on(bookActions.FailedBooks, (state, { error }) => ({
    ...state,
    error,
    status: 'failed',
  }))
);

export const booksReducer = (state = initState, action: Action) =>
  reducer(state, action);

import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
  books: reducers.BookState;
}

export const appReducers: ActionReducerMap<AppState> = {
  books: reducers.booksReducer,
};

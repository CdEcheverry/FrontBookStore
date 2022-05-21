import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from '../../store/app.reducer';
import { Book } from '../../models/book.model';
import { GetBooks, GetErrorMessage, GetStatusBook } from 'src/app/store/selectors/book.selector';
import * as fromActions from '../../store/actions';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  statusBook$: Observable<'loading' | 'completed' | 'failed' | 'started'> =
    of('started');
  booksList$: Observable<Book[]> = of([]);
  failedMessage$: Observable<string | null> = of('');

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.statusBook$ = this.store.select(GetStatusBook);
    this.booksList$ = this.store.select(GetBooks);
    this.failedMessage$ = this.store.select(GetErrorMessage);
    this.store.dispatch(fromActions.LoadingSearchBooks());
  }
}

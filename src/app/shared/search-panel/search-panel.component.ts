import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import * as fromActions from '../../store/actions';
import { Observable, of } from 'rxjs';
import { Criteria } from 'src/app/models/criteria.model';
import { GetCriteria } from 'src/app/store/selectors/book.selector';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
})
export class SearchPanelComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  inputSearch: string = '';
  criteria$: Observable<Criteria> = of({
    typeSearch: {name: '', id: ''},
    inputSearch: '',
  });
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.criteria$ = this.store.select(GetCriteria);
  }

  typeSearch(id: string, name: string) {
    this.store.dispatch(fromActions.ChangeSearchCriteria({ typeSearch: {name, id} }));
  }

  doSearch() {
    this.store.dispatch(
      fromActions.ChangeSearchCriteria({ inputSearch: this.inputSearch })
    );
    this.store.dispatch(fromActions.LoadingSearchBooks());
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Criteria } from '../models/criteria.model';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  getBooksByCriteria(criteria: Criteria): Observable<Book[]> {
    return this.http.get<Book[]>(`https://localhost:44359/api/Book/${criteria.typeSearch.id}/${criteria.inputSearch}`);
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`https://localhost:44359/api/Book`); 
  }

  constructor(private http: HttpClient) {}
}

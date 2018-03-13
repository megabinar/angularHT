
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { catchError, first } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CartItem } from '../models';

@Injectable()
export class CartService {
  private readonly cartUrl = 'http://localhost:3000/cart';
  private productsInCart$ = new BehaviorSubject<CartItem[]>([]);

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<CartItem[]>(this.cartUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  add(item: CartItem) {
    return this.http.post(this.cartUrl, { ...item, count: 1 })
      .pipe(
        catchError(this.handleError)
      );
  }

  update(item: CartItem) {
    return this.http.put(this.cartUrl + '/' + item.id, item)
      .pipe(
        catchError(this.handleError)
      );
  }

  remove(id: number) {
    return this.http.delete(this.cartUrl + '/' + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;

    // A client-side or network error occurred.
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }

    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }

}

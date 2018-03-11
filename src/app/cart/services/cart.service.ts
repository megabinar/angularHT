
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

  constructor(private http: HttpClient) {
    this.refresh();
  }

  refresh() {
    this.http.get<CartItem[]>(this.cartUrl)
      .pipe(
        first(),
        catchError(this.handleError)
      ).subscribe(x => this.productsInCart$.next(x));
  }

  get cartItems$() {
    return this.productsInCart$.asObservable();
  }

  get totalCost$() {
    return this.cartItems$
      .map(items => items.reduce((prev, cur) => prev + cur.price * cur.count, 0));
  }

  get totalCount$() {
    return this.cartItems$
      .map(items => items.reduce((prev, cur) => prev + cur.count, 0));
  }

  addToCart(pid: number, name: string, price: number) {
    this.productsInCart$.first().subscribe(items => {
      const ind = items.findIndex(x => x.pid === pid);
      let action;
      if (ind >= 0) {
        items[ind].count++;
        action = this.http.put(this.cartUrl + '/' + items[ind].id, items[ind]);
      } else {
        action = this.http.post(this.cartUrl, { pid, name, price, count: 1 });
      }

      action.pipe(
        catchError(this.handleError)
      ).do(() => this.refresh()).subscribe();
    });
  }

  removeFromCart(pid: number) {
    this.productsInCart$
      .first()
      .subscribe(items => {
        const ind = items.findIndex(x => x.pid === pid);
        let action;
        if (ind >= 0 && items[ind].count > 1) {
          items[ind].count--;
          action = this.http.put(this.cartUrl + '/' + items[ind].id, items[ind]);
        } else {
          action = this.http.delete(this.cartUrl + '/' + items[ind].id);
        }

        action.pipe(
          catchError(this.handleError)
        ).do(() => this.refresh()).subscribe();
      });
  }

  clear() {
    this.productsInCart$.next([]);
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

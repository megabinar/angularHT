
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

import { CartItem } from '../models';

@Injectable()
export class CartService {
  private productsInCart$ = new BehaviorSubject<CartItem[]>([]);

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
      let newItems: CartItem[];
      if (ind >= 0) {
        items[ind].count++;
        newItems = items;
      } else {
        newItems = [...items, { pid, name, price, count: 1 }];
      }

      this.productsInCart$.next(newItems);
    });
  }

  increment(pid: number) {
    this.productsInCart$.first().subscribe(items => {
      const ind = items.findIndex(x => x.pid === pid);
      items[ind].count++;
      this.productsInCart$.next(items);
    });
  }

  decrement(pid: number) {
    this.productsInCart$.first().subscribe(items => {
      const ind = items.findIndex(x => x.pid === pid);
      if (ind >= 0 && items[ind].count > 1) {
        items[ind].count--;
        this.productsInCart$.next(items);
      }
    });
  }

  removeFromCart(pid: number) {
    this.productsInCart$
      .first()
      .subscribe(items => {
        const ind = items.findIndex(x => x.pid === pid);
        let newItems: CartItem[];
        if (ind >= 0 && items[ind].count > 1) {
          items[ind].count--;
          newItems = items;
        } else {
          newItems = items.filter(i => i.pid !== pid);
        }

        this.productsInCart$.next(newItems);
      });
  }

  clear() {
    this.productsInCart$.next([]);
  }
}

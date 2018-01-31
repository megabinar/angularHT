
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

import { CartItem } from '../models';

@Injectable()
export class CartService {
  private productsInCart$ = new BehaviorSubject<CartItem[]>([]);
  // private total$ = new BehaviorSubject<number>(0);
  private id = 0;
  constructor() { }

  get cartItems$() {
    return this.productsInCart$.asObservable();
  }

  get totalCost$() {
    return this.cartItems$
      .map(items => items.map(x => x.price).reduce((prev, cur) => prev + cur, 0));
  }

  addToCart(name: string, price: number) {
    this.productsInCart$.first().subscribe(items => {
      const newItems = [...items, { id: this.generateId(), name, price }];
      this.productsInCart$.next(newItems);
    });
  }

  removeFromCart(id: number) {
    this.productsInCart$
      .first()
      .subscribe(items => {
        const newItems = items.filter(i => i.id !== id);
        this.productsInCart$.next(newItems);
      });
  }

  private generateId() {
    console.log('genId', this.id);
    return this.id++;
  }
}

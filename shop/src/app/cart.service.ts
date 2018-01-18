import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {
  private productsInCart = new Subject<string[]>();
  private products: string[] = [];

  constructor() { }

  getProductsInCart() {
    return this.productsInCart.asObservable();
  }

  addToCart(product: string) {
    this.products = [...this.products, product];
    this.productsInCart.next(this.products);
  }

  removeFromCart(product: string) {
    this.products.splice(this.products.indexOf(product), 1);
    this.productsInCart.next(this.products);
  }

  getAll() {
    return ['Product1', 'Product2'];
  }
}

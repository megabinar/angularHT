import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['../../styles.fix.css', './cart.component.css']
})
export class CartComponent implements OnInit {
  // TODO bug if both async in template???????
  products$: Observable<string[]>;
  cartVisible$: Observable<boolean>;

  products: string[];
  cartVisible: boolean;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.products$ = this.cartService.getProductsInCart();
    this.products$.subscribe(x => this.products = x);

    this.cartVisible$ = this.products$
      .map(p => !!p.length);
    this.cartVisible$.subscribe(x => this.cartVisible = x);
  }

  onRemove(name: string) {
    this.cartService.removeFromCart('name');
  }
}

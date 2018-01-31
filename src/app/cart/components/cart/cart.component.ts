import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CartItem } from '../../models';
import { CartService } from '../../services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['../../../../styles.fix.css', './cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems$: Observable<CartItem[]>;
  isCartVisible$: Observable<boolean>;
  totalCount$: Observable<number>;
  totalCost$: Observable<number>;

  @HostBinding('class') cls = null;
  @HostListener('click') onClick() {
    this.cls = this.cls === '' ? 'awesome' : '';
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems$ = this.cartService.cartItems$;
    this.totalCost$ = this.cartService.totalCost$;

    this.isCartVisible$ = this.cartItems$
      .map(p => !!p.length);

    this.totalCount$ = this.cartItems$
      .map(p => p.length);
  }

  onRemove(id: number) {
    this.cartService.removeFromCart(id);
  }
}

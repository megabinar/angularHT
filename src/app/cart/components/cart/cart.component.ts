import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CartItem } from '../../models';
import { CartService } from '../../services';
import { Store } from '@ngrx/store';
import { AppState } from '../../../+store/state';
import * as selectors from '../../+store/selectors';
import * as actions from '../../+store/actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['../../../../styles.fix.css', './cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems$: Observable<ReadonlyArray<CartItem>>;
  isCartVisible$: Observable<boolean>;
  totalCount$: Observable<number>;
  totalCost$: Observable<number>;

  @HostBinding('class') cls = null;
  @HostListener('click') onClick() {
    this.cls = this.cls === '' ? 'awesome' : '';
  }

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.cartItems$ = this.store.select(selectors.itemsSelector);
    this.totalCost$ = this.store.select(selectors.totalCostSelector);
    this.totalCount$ = this.store.select(selectors.totalCountSelector);

    this.isCartVisible$ = this.cartItems$
      .map(p => !!p.length);
  }

  onRemove(id: number) {
    this.store.dispatch(new actions.Remove(id));
  }
}

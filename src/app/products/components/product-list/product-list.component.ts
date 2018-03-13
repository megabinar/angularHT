import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ProductItem } from '../../models';
import { ProductPromiseService } from '../../services';
import { CartService } from '../../../cart';
import { AppState } from '../../../+store/state';
import * as cartActions from '../../../cart/+store/actions';
import { Navigate } from '../../../+store/actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['../../../../styles.fix.css', './product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Promise<ProductItem[]>;

  constructor(
    private productService: ProductPromiseService,
    private cartService: CartService,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.products = this.productService.getAll();
  }

  onBuy(p: ProductItem) {
    console.log('bought ', p);
    this.store.dispatch(new cartActions.Add({ pid: p.id, name: p.name, price: p.price }));
    // this.cartService.addToCart();
  }

  goDetail(p: ProductItem) {
    this.store.dispatch(new Navigate({ path: '/products/' + p.id }));
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { ProductPromiseService } from '../../services';
import { ProductItem } from '../..';
import { AppState } from '../../../+store/state';
import { Store } from '@ngrx/store';
import { Navigate } from '../../../+store/actions';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  product: ProductItem;

  constructor(
    private productService: ProductPromiseService,
    private r: ActivatedRoute,
    private store: Store<AppState>) { }

  navigateDetail() {
    this.store.dispatch(new Navigate({ path: '/products/' + this.product.id }));
  }

  async ngOnInit() {
    const id = +this.r.snapshot.params['id'];
    this.product = await this.productService.get(id);
  }
}

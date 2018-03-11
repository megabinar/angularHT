import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductItem } from '../../models';
import { ProductPromiseService } from '../../services';
import { CartService } from '../../../cart';

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
    private router: Router) { }

  ngOnInit() {
    this.products = this.productService.getAll();
  }

  onBuy(p: ProductItem) {
    console.log('bought ', p);
    this.cartService.addToCart(p.id, p.name, p.price);
  }

  goDetail(p: ProductItem) {
    this.cartService.addToCart(p.id, p.name, p.price);
    this.router.navigate(['/products', p.id]);
  }
}

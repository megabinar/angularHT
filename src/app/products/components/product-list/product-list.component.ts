import { Component, OnInit } from '@angular/core';

import { ProductItem } from '../../models';
import { ProductService } from '../../services';
import { CartService } from '../../../cart';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['../../../../styles.fix.css', './product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: ProductItem[];

  constructor(
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getAll();
  }

  onBuy(p: ProductItem) {
    console.log('bought ', p);
    this.cartService.addToCart(p.id, p.name, p.price);
  }
}

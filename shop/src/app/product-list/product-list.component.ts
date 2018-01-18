import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['../../styles.fix.css', './product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getAll();
  }

  onBuy(name: string) {
    console.log('bought ', name);
    this.cartService.addToCart(name);
  }
}

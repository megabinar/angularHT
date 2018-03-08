import { Component, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services';
import { ProductItem } from '../..';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  product: ProductItem;

  constructor(
    private productService: ProductService,
    private r: ActivatedRoute,
    private router: Router) { }

  navigateDetail(ev: number) {
    this.router.navigate(['products', ev]);
  }

  ngOnInit() {
    const id = +this.r.snapshot.params['id'];
    this.product = this.productService.getAll().find(i => i.id === id);
  }
}

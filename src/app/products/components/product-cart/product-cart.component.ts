import { Component, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { ProductPromiseService } from '../../services';
import { ProductItem } from '../..';

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
    private router: Router) { }

  navigateDetail(ev: number) {
    this.router.navigate(['products', ev]);
  }

  async ngOnInit() {
    const id = +this.r.snapshot.params['id'];
    this.product = await this.productService.get(id);
  }
}

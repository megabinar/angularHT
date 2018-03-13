import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { ProductPromiseService } from '../../../products';
import { AppState } from '../../../+store/state';
import { Navigate } from '../../../+store/actions';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService: ProductPromiseService,
    private store: Store<AppState>) { }

  ngOnInit() {
  }

  onCreate(i: string) {
    this.productService.add(i);
    this.store.dispatch(new Navigate({ path: 'admin/products' }));
  }
}

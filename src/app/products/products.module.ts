import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './services';
import { ProductComponent, ProductListComponent } from './components';

import { OrderByPipe } from './pipes/order-by.pipe';
import { ProductsRoutingModule } from './products.routing.module';
import { CartModule } from '../cart';
import { ProductCartComponent } from './components/product-cart/product-cart.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CartModule
  ],
  declarations: [ProductComponent, ProductListComponent, OrderByPipe, ProductCartComponent],
  providers: []
})
export class ProductsModule {
  static forRoot() {
    return {
      ngModule: ProductsModule,
      providers: [ProductService]
    };
  }
}

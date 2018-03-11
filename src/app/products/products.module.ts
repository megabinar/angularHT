import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductPromiseService } from './services';
import { ProductComponent, ProductListComponent, ProductCartComponent } from './components';

import { ProductsRoutingModule } from './products.routing.module';
import { AppCommonModule } from '../common/app-common.module';
import { CartModule } from '../cart';
// import { ProductCartComponent } from './components/product-cart/product-cart.component';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    HttpClientModule,
    ProductsRoutingModule,
    CartModule,
  ],
  declarations: [ProductComponent, ProductListComponent, ProductCartComponent],
  providers: []
})
export class ProductsModule {
  static forRoot() {
    return {
      ngModule: ProductsModule,
      providers: [ProductPromiseService]
    };
  }
}

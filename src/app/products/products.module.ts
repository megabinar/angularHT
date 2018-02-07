import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './services';
import { ProductComponent, ProductListComponent } from './components';

import { CartModule } from '../cart';

@NgModule({
  imports: [
    CommonModule,
    // CartModule //TODO Наверное подключается в appModule потому что, не совсем понял
  ],
  exports: [ProductListComponent],
  declarations: [ProductComponent, ProductListComponent],
  providers: [ProductService]
})
export class ProductsModule { }

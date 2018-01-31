import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './services';
import { ProductComponent, ProductListComponent } from './components';

import { CartModule } from '../cart';

@NgModule({
  imports: [
    CommonModule,
    CartModule
  ],
  exports: [ProductListComponent],
  declarations: [ProductComponent, ProductListComponent],
  providers: [ProductService]
})
export class ProductsModule { }

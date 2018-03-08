import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from './services';
import { CartComponent, CartFullComponent, OrderComponent } from './components';

import { CartRoutingModule } from './cart.routing.module';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  exports: [CartComponent],
  declarations: [CartComponent, CartFullComponent, OrderComponent],
  providers: [CartService]
})
export class CartModule { }

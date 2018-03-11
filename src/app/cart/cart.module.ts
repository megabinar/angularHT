import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CartService } from './services';
import { CartComponent, CartFullComponent, OrderComponent } from './components';

import { CartRoutingModule } from './cart.routing.module';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    HttpClientModule
  ],
  exports: [CartComponent],
  declarations: [CartComponent, CartFullComponent, OrderComponent],
  providers: [CartService]
})
export class CartModule { }

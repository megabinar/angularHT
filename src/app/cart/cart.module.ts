import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { CartService } from './services';
import { CartComponent, CartFullComponent, OrderComponent } from './components';

import { CartRoutingModule } from './cart.routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './+store/reducers/reducer';
import { CartEffects } from './+store/effects';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('cart', reducers),
    EffectsModule.forFeature([CartEffects]),
  ],
  exports: [CartComponent],
  declarations: [CartComponent, CartFullComponent, OrderComponent],
  providers: [CartService]
})
export class CartModule { }

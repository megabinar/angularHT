import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from './services';
import { CartComponent } from './components/';

@NgModule({
  imports: [CommonModule],
  exports: [CartComponent],
  declarations: [CartComponent],
  providers: [CartService]
})
export class CartModule { }

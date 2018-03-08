import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateProductComponent, AdminAppComponent } from './components';
import { ProductsModule } from '../products/products.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ProductsModule
  ],
  declarations: [CreateProductComponent, AdminAppComponent]
})
export class AdminModule { }

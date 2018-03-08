import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartFullComponent } from './components/cart-full/cart-full.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartFullComponent
  }, {
    path: 'order',
    component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }

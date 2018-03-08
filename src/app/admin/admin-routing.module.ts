import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../products';
import { AdminAppComponent, CreateProductComponent } from './components';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  },
  {
    path: 'products',
    component: AdminAppComponent,
    children: [{ path: '', component: ProductListComponent }]
  },
  {
    path: 'create',
    component: AdminAppComponent,
    children: [{ path: '', component: CreateProductComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    ProductCartComponent,
    ProductListComponent
} from './components';

const routes: Routes = [
    {
        path: 'products',
        children: [
            {
                path: '',
                component: ProductListComponent
            },
            {
                path: ':id',
                component: ProductCartComponent
            }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components';

import { AppComponent } from './app.component';
import { AdminGuard } from './services/guards';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    redirectTo: '/products'
}, {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AdminGuard]
}, {
    path: '**',
    component: NotFoundComponent
}];

export const appComponents = [AppComponent, NotFoundComponent];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
        //    enableTracing: true
        })
    ],
    providers: [AdminGuard],
    exports: [RouterModule]
})
export class AppRoutingModule { }

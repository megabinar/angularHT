import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule, RouterStateSerializer, } from '@ngrx/router-store';

import { AppComponent } from './app.component';

import { CartModule } from './cart/cart.module';
import { AppRoutingModule, appComponents } from './app.routing.module';
import { ProductsModule } from './products/products.module';
import { AppCommonModule } from './common/app-common.module';
import { TimingInterceptor } from './common';

import { reducers } from './+store/reducer';
import { CustomRouterStateSerializer } from './services';
import { NavigationEffects } from './+store/effects';

@NgModule({
  declarations: [...appComponents],
  imports: [
    BrowserModule,
    AppCommonModule,
    ProductsModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([NavigationEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimingInterceptor,
      multi: true
    },
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

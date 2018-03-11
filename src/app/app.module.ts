import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';

import { CartModule } from './cart';
import { AppComponent } from './app.component';

import { AppRoutingModule, appComponents } from './app.routing.module';
import { ProductsModule } from './products/products.module';
import { AppCommonModule } from './common/app-common.module';
import { TimingInterceptor } from './common';
import { AdminGuard } from './services/guards/admin.guard';

@NgModule({
  declarations: [...appComponents],
  imports: [
    BrowserModule,
    AppCommonModule,
    ProductsModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

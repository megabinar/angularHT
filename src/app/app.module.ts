import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';

import { CartModule } from './cart';
import { AppComponent } from './app.component';

import {
  GeneratorService, GEN_TOKEN,
  ConstantsService, CONST_TOKEN
} from './services';

import { AppRoutingModule, appComponents } from './app.routing.module';
import { AdminGuard } from './services/guards/admin.guard';
import { ClickToFillDirective } from './directives';
import { VisibleScrollComponent } from './components';
import { ProductsModule } from './products/products.module';

const value = new ConstantsService().getAll();

const genFactory = () => new GeneratorService(22);

@NgModule({
  declarations: [...appComponents,
    ClickToFillDirective,
    VisibleScrollComponent],
  imports: [
    BrowserModule,
    ProductsModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    { provide: CONST_TOKEN, useValue: value },
    { provide: GEN_TOKEN, useFactory: genFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

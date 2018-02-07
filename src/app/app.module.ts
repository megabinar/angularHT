import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { CartModule } from './cart';
import { ProductsModule } from './products';

import { AppComponent } from './app.component';
import { ConstantsService, CONST_TOKEN } from './services/constants.service';
import { GeneratorService, GEN_TOKEN } from './services/generator.service';
import { ClickToFillDirective } from './directives/click-to-fill.directive';
import { VisibleScrollComponent } from './components/visible-scroll/visible-scroll.component';

const value = new ConstantsService().getAll();

const genFactory = () => new GeneratorService(22);

@NgModule({
  declarations: [AppComponent, ClickToFillDirective, VisibleScrollComponent],
  imports: [BrowserModule, CartModule, ProductsModule],
  providers: [
    { provide: CONST_TOKEN, useValue: value },
    { provide: GEN_TOKEN, useFactory: genFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

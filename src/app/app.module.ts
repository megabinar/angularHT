import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CartModule } from './cart';
import { ProductsModule } from './products';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CartModule, ProductsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

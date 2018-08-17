import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ReactiveFormsModule } from '@angular/forms';

import { SimpleComponent } from './simple/simple.component';
import { RegularComponent } from './regular/regular.component';
import { MessagingService } from './messaging.service';

const elements = [
  { selector: 'app-simple', type: SimpleComponent },
  { selector: 'app-regular', type: RegularComponent }
];

const elementDeclarations = elements.map(e => e.type);

@NgModule({
  declarations: [...elementDeclarations],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [MessagingService],
  entryComponents: [...elementDeclarations]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    // adding elements at once.
    elements.forEach(e => customElements.define(e.selector, createCustomElement(e.type, { injector: this.injector })));
  }
}

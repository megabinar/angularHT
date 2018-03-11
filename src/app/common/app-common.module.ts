import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ClickToFillDirective } from './directives';
import { OrderByPipe } from './pipes';
import { VisibleScrollComponent } from './components';

import {
  GeneratorService, GEN_TOKEN,
  ConstantsService, CONST_TOKEN, ConfigOptionsService, LocalStorageService
} from './services';

const value = new ConstantsService().getAll();
const genFactory = () => new GeneratorService(22);

const components = [ClickToFillDirective, OrderByPipe, VisibleScrollComponent];

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [
    { provide: CONST_TOKEN, useValue: value },
    { provide: GEN_TOKEN, useFactory: genFactory },
    LocalStorageService,
    ConfigOptionsService
  ],
  declarations: [...components],
  exports: [...components]
})
export class AppCommonModule { }

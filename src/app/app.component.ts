import { Component, HostListener, Inject, Optional } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { GEN_TOKEN, GeneratorService, CONST_TOKEN, ConfigOptionsService } from './common/services';
import { AppState } from './+store/state';
import { Get } from './cart/+store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  metadata = 'empty';
  title = 'Shop';
  now = Date.now();

  constructor(
    @Optional() @Inject(GEN_TOKEN) private gen: GeneratorService,
    @Optional() @Inject(CONST_TOKEN) private constants: any,
    @Optional() private configService: ConfigOptionsService, store: Store<AppState>) {
    if (gen != null) {
      this.title = gen.generate();
    }
    if (constants != null) {
      this.metadata = constants;
    }

    console.log('ConfigOptionsService is ', this.configService.get());

    store.dispatch(new Get());
  }
}

import { Component, HostListener, Inject, Optional } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { GEN_TOKEN, GeneratorService, CONST_TOKEN, ConfigOptionsService } from './common/services';

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
    @Optional() private configService: ConfigOptionsService) {
    if (gen != null) {
      this.title = gen.generate();
    }
    if (constants != null) {
      this.metadata = constants;
    }

    console.log('ConfigOptionsService is ', this.configService.get());
  }
}

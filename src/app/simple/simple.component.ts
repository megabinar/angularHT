import { Component, ViewEncapsulation, Input } from '@angular/core';
import { MessagingService } from '../messaging.service';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  encapsulation: ViewEncapsulation.Native
})
export class SimpleComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('counter') counterFromInput = 'init'; // #3
  private counterFromMsg$: Observable<string>; // #4

  constructor(private ms: MessagingService) {
    this.counterFromMsg$ = ms.sub$;
  }
}

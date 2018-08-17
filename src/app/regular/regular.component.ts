import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessagingService } from '../messaging.service';

@Component({
  selector: 'app-regular',
  templateUrl: './regular.component.html',
  styleUrls: ['./regular.component.scss'],
  // Observation: this breaks the styles
  // encapsulation: ViewEncapsulation.Native
})
export class RegularComponent implements OnInit {
  // Observation: camelCase not works here
  @Input('init-value') counter = 10; // tslint:disable-line:no-input-rename
  @Output() tick: EventEmitter<any> = new EventEmitter<any>();

  constructor(private ms: MessagingService) { }

  ngOnInit() {
    const ticker = () => setTimeout(() => {
      return this.doTick() && (ticker() || true);
    }, 1000);

    ticker();
  }

  private doTick() {
    if (this.counter <= 0) {
      return false;
    }

    this.counter--;
    this.tick.emit(this.counter);   // #3
    this.ms.pub(`${this.counter}`); // #4
    return true;
  }
}

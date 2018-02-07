import { Component, HostListener } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-visible-scroll',
  templateUrl: './visible-scroll.component.html',
  styleUrls: ['./visible-scroll.component.css']
})
export class VisibleScrollComponent {
  private subj = new Subject<Observable<boolean>>();
  showScroll$ = this.subj.asObservable().switchMap(s => s);

  @HostListener('document:wheel') wheelListener() {
    this.subj.next(Observable.of(true).concat(Observable.of(false).delay(1000)));
  }
}

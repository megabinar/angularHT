import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MessagingService {
    private source$ = new Subject<string>();
    pub(msg: string) {
        this.source$.next(msg);
    }

    public get sub$(): Observable<string> {
        return this.source$.asObservable();
    }
}

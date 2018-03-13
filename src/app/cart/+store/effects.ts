import { of } from 'rxjs/observable/of';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { CartService } from '../services';
import * as fromActions from './actions';
import { itemsSelector } from './selectors';
import { Store } from '@ngrx/store';
import { State } from './reducers/cart.state';

@Injectable()
export class CartEffects {
    @Effect() getAll$ = this.actions
        .ofType<fromActions.Get>(fromActions.CartActionTypes.GET)
        .pipe(
            switchMap(a => this.apiService.getAll()
                .pipe(
                    map(x => new fromActions.GetComplete(x))
                )
            ),
            catchError(() => of(new fromActions.Fail()))
        );

    @Effect() add$ = this.actions
        .ofType<fromActions.Add>(fromActions.CartActionTypes.ADD)
        .pipe(
            withLatestFrom(this.store.select(itemsSelector)),
            switchMap(([a, items]) => {
                const ind = items.findIndex(i => i.id === a.payload.pid);
                const item = { ...items[ind] };
                let action;
                if (ind >= 0) {
                    item.count++;
                    action = this.apiService.update(item);
                } else {
                    action = this.apiService.add(a.payload);
                }

                return action.pipe(
                    map(() => new fromActions.Get())
                );
            }),
            catchError(() => of(new fromActions.Fail()))
        );

    @Effect() remove$ = this.actions
        .ofType<fromActions.Remove>(fromActions.CartActionTypes.REMOVE)
        .pipe(
            withLatestFrom(this.store.select(itemsSelector)),
            switchMap(([a, items]) => {
                const ind = items.findIndex(i => i.id === a.payload);
                const item = { ...items[ind] };
                let action;
                if (ind >= 0 && item.count > 1) {
                    item.count--;
                    action = this.apiService.update(item);
                } else {
                    action = this.apiService.remove(item.id);
                }

                return action.pipe(
                    map(() => new fromActions.Get())
                );
            }),
            catchError(() => of(new fromActions.Fail()))
        );

    constructor(
        private actions: Actions,
        private apiService: CartService,
        private store: Store<State>) { }
}

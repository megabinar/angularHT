import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Router } from '@angular/router';

import { Navigate, NavigationActions } from './actions';

@Injectable()
export class NavigationEffects {
    @Effect({ dispatch: false }) navigation$ = this.actions
        .ofType<Navigate>(NavigationActions.NAVIGATE)
        .map(action => this.router.navigate([action.payload.path]));

    constructor(private actions: Actions, private router: Router) { }
}

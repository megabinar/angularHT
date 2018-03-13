import { Action } from '@ngrx/store';

export enum NavigationActions {
    NAVIGATE = 'router/navigate'
}

export class Navigate implements Action {
    readonly type = NavigationActions.NAVIGATE;
    constructor(public payload: { path: string }) { }
}

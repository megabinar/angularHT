import { Action } from '@ngrx/store';
import { CartItem } from '../models';

export enum CartActionTypes {
    GET = 'cart/get',
    GET_COMPLETE = 'cart/getComplete',
    ADD = 'cart/Add',
    ADD_COMPLETE = 'cart/AddComplete',

    REMOVE = 'cart/remove',
    REMOVE_COMPLETE = 'cart/removeComplete',
    FAIL = 'cart/fail'
}

export class Get implements Action {
    readonly type = CartActionTypes.GET;
    constructor(public payload?: CartItem[]) { }
}

export class GetComplete implements Action {
    readonly type = CartActionTypes.GET_COMPLETE;
    constructor(public payload?: CartItem[]) { }
}

export class Add implements Action {
    readonly type = CartActionTypes.ADD;
    constructor(public payload: CartItem) { }
}

export class AddComplete implements Action {
    readonly type = CartActionTypes.ADD_COMPLETE;
    constructor(public payload: CartItem) { }
}

export class Remove implements Action {
    readonly type = CartActionTypes.REMOVE;
    constructor(public payload: number) { }
}

export class RemoveComplete implements Action {
    readonly type = CartActionTypes.REMOVE_COMPLETE;
    constructor(public payload: number) { }
}

export class Fail implements Action {
    readonly type = CartActionTypes.FAIL;
}

export type CartActions
    = Get | GetComplete
    | Add | AddComplete
    | Remove | RemoveComplete
    | Fail
    ;

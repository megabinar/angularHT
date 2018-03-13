import { createFeatureSelector, createSelector, Selector } from '@ngrx/store';
import { CartState } from './reducers/cart.state';
import { AppState } from '../../+store/state';

export const cartSelector: Selector<AppState, CartState> = createFeatureSelector('cart');

export const itemsSelector = createSelector(cartSelector, x => x.data);

export const totalCostSelector = createSelector(itemsSelector, x => x.reduce((prev, cur) => prev + cur.price * cur.count, 0));

export const totalCountSelector = createSelector(itemsSelector, x => x.reduce((prev, cur) => prev + cur.count, 0));

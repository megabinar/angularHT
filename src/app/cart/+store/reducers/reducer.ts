import { ActionReducerMap } from '@ngrx/store';
import { cartReducer } from './cart.reducer';
import { AppState } from '../../../+store/state';
import { CartItem } from '../../models';
import { State } from './cart.state';



// export const reducers: ActionReducerMap<State> = {
//     cart: cartReducer,
// };

export const reducers = cartReducer;


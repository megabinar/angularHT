import { ActionReducerMap } from '@ngrx/store';
import { CartState, initialCartState } from './cart.state';
import { CartActionTypes, CartActions } from '../actions';

export function cartReducer(
    state = initialCartState,
    action: CartActions
): CartState {
    console.log(`Reducer: Action came in! ${action.type}`);

    switch (action.type) {
        case CartActionTypes.GET_COMPLETE: {
            return { ...state, data: action.payload };
        }

        case CartActionTypes.ADD_COMPLETE: {
            return { ...state, data: [...state.data, action.payload] };
        }

        case CartActionTypes.REMOVE_COMPLETE: {
            const ind = state.data.findIndex(x => x.id === x.id);
            if (ind >= 0) {
                return { ...state, data: state.data.slice(ind, 1) };
            }

            return { ...state };
        }

        default: {
            console.log('UNKNOWN_TASK action being handled!');
            return state;
        }
    }
}

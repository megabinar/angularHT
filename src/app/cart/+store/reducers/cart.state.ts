import { AppState } from '../../../+store/state';
import { CartItem } from '../../models';

export interface CartState {
    data: ReadonlyArray<CartItem>;
}

export const initialCartState: CartState = {
    data: []
};

export interface State extends AppState {
    cart: CartState;
}

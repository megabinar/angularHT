import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from '../services/customRouterStoreSerializer';

export interface AppState {
    router: RouterReducerState<RouterStateUrl>;
}

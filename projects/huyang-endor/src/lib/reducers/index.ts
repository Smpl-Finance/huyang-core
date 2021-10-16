import {Action, ActionReducerMap, createAction, createReducer, MetaReducer, on, props} from '@ngrx/store';


export const endorStateFeatureKey = 'endorState';

export interface EndorSidenavProfileActionPropType {
  currentAccount: AccountViewModel;
}

export interface AccountViewModel {
  firstName: string;
  lastName: string;
  url: string;
}

export interface EndorState {
  currentAccount: AccountViewModel;
}

export const endorSidenavProfileAction = createAction(
  '[Endor Sidenav] Set Profile',
  props<EndorSidenavProfileActionPropType>()
);

const endorProfileReducer = (state: EndorState, {currentAccount}) => {
  const nState: EndorState = {...state};
  nState.currentAccount = currentAccount;
  return nState;
};
const blaReducer = createReducer({} as EndorState, on(endorSidenavProfileAction, endorProfileReducer));

export function endorStateReducer(state: EndorState | undefined, action: Action) {
  return blaReducer(state, action);
}

// export const reducers: ActionReducerMap<EndorState> = {
//   currentAccount: blaReducer,
// };

export const metaReducers: MetaReducer<EndorState>[] = [];

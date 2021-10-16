import { CoreAction, CoreActionTypes } from './core.actions';

export const CORE_FEATURE_KEY = 'core';

export interface CoreState {
  coreLoaded: boolean; // has the Core list been loaded
  coreModuleTitle: string;
}

export interface CorePartialState {
  readonly [CORE_FEATURE_KEY]: CoreState;
}

export const initialState: CoreState = {
  coreLoaded: false,
  coreModuleTitle: ''
};

export function reducer(
  state: CoreState = initialState,
  action: CoreAction
): CoreState {
  switch (action.type) {
    case CoreActionTypes.CoreInit: {
      return {
        ...initialState
      };
    }
    case CoreActionTypes.CoreLoad: {
      return {
        ...state,
        coreLoaded: true
      };
    }
    case CoreActionTypes.CoreSetModuleTitle: {
      return {
        ...state,
        coreModuleTitle: action.title
      };
    }
    default:
      return state;
  }
}

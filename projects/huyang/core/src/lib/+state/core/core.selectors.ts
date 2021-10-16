import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CORE_FEATURE_KEY, CoreState } from './core.reducer';

// Lookup the 'Core' feature state managed by NgRx
const getCoreState = createFeatureSelector<CoreState>(CORE_FEATURE_KEY);

const getCoreLoaded = createSelector(
  getCoreState,
  (state: CoreState) => state ? state.coreLoaded : null
);

const getCoreModuleTitle = createSelector(
  getCoreState,
  (state: CoreState) => state ? state.coreModuleTitle : null
);

export const coreQuery = {
  getCoreLoaded,
  getCoreModuleTitle
};

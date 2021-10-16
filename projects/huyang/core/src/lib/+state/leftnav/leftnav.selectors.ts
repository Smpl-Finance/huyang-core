import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LEFTNAV_FEATURE_KEY, LeftnavState } from './leftnav.reducer';

// Lookup the 'Leftnav' feature state managed by NgRx
const getLeftnavState = createFeatureSelector<LeftnavState>(
  LEFTNAV_FEATURE_KEY
);

const getLeftnavLoaded = createSelector(
  getLeftnavState,
  (state: LeftnavState) => state ? state.leftnavLoaded : null
);

const getLeftnavOpenState = createSelector(
  getLeftnavState,
  (state: LeftnavState) => state ? state.leftnavOpen : null
);

const getLeftnavHeaderHeight = createSelector(
  getLeftnavState,
  (state: LeftnavState) => state ? state.leftnavHeaderHeight : null
);

const getLeftnavOpenFeatureState = createSelector(
  getLeftnavState,
  (state: LeftnavState) => state ? state.leftnavOpenFeature : null
);

const getLeftnavHeaderLinks = createSelector(
  getLeftnavState,
  (state: LeftnavState) => state ? state.leftnavHeaderLinks : null
);

export const leftnavQuery = {
  getLeftnavLoaded,
  getLeftnavOpenState,
  getLeftnavHeaderHeight,
  getLeftnavOpenFeatureState,
  getLeftnavHeaderLinks
};

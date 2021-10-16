import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HEADER_FEATURE_KEY, HeaderState } from './header.reducer';

// Lookup the 'Header' feature state managed by NgRx
const getHeaderState = createFeatureSelector<HeaderState>(HEADER_FEATURE_KEY);

const getHeaderLoaded = createSelector(
  getHeaderState,
  (state: HeaderState) => state ? state.headerLoaded : null
);

const getHeaderMobileMenuOpen = createSelector(
  getHeaderState,
  (state: HeaderState) => state ? state.headerMobileMenuOpen : null
);

const getHeaderSearchParams = createSelector(
  getHeaderState,
  (state: HeaderState) => state ? state.headerSearchParams : null
);

const getHeaderLinks = createSelector(
  getHeaderState,
  (state: HeaderState) => state ? state.headerLinks : null
);

const getHuyangUserAccount = createSelector(
  getHeaderState,
  (state: HeaderState) => state ? state.headerUser : null
);

const getHeaderTitle = createSelector(
  getHeaderState,
  (state: HeaderState) => state ? state.headerTitle : null
);

const getHeaderLogo = createSelector(
  getHeaderState,
  (state: HeaderState) => state ? state.headerLogo : null
);

export const headerQuery = {
  getHeaderLoaded,
  getHeaderMobileMenuOpen,
  getHeaderSearchParams,
  getHeaderLinks,
  getHuyangUserAccount,
  getHeaderTitle,
  getHeaderLogo
};

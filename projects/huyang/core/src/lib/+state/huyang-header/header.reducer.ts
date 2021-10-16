import { HeaderAction, HeaderActionTypes } from './header.actions';
import {HuyangHeaderLinkModel} from '../../models/huyang-header/huyang-header-link.model';
import {HuyangUserAccountModel} from '../../models/huyang-user-account.model';
import {HuyangHeaderSearchParamModel} from '../../models/huyang-header/huyang-header-search-param.model';

export const HEADER_FEATURE_KEY = 'header';

export interface HeaderState {
  headerLoaded: boolean; // has the Header list been loaded
  headerTitle: string;
  headerLogo: string;
  headerLinks: HuyangHeaderLinkModel[];
  headerSearchParams: HuyangHeaderSearchParamModel[];
  headerUser: HuyangUserAccountModel;
  headerMobileMenuOpen: boolean;
}

export interface HeaderPartialState {
  readonly [HEADER_FEATURE_KEY]: HeaderState;
}

export const initialState: HeaderState = {
  headerLoaded: false,
  headerTitle: 'Huyang Core',
  headerLogo: '',
  headerLinks: [],
  headerSearchParams: [],
  headerUser: {
    id: 0,
    firstName: '',
    lastName: '',
    username: '',
    email: ''
  } as HuyangUserAccountModel,
  headerMobileMenuOpen: false
};

export function reducer(
  state: HeaderState = initialState,
  action: HeaderAction
): HeaderState {
  switch (action.type) {
    case HeaderActionTypes.HeaderInit: {
      return { ...initialState };
    }
    case HeaderActionTypes.HeaderLoad: {
      return {
        ...state,
        headerLoaded: true,
        headerTitle: action.title,
        headerLogo: action.logo,
        headerLinks: [...action.links],
        headerSearchParams: [...action.params],
        headerUser: action.user,
        headerMobileMenuOpen: false
      };
    }
    case HeaderActionTypes.HeaderSetLoad: {
      return {
        ...state,
        headerLoaded: true
      };
    }
    case HeaderActionTypes.HeaderSetTitle: {
      return {
        ...state,
        headerTitle: action.title
      };
    }
    case HeaderActionTypes.HeaderSetLogo: {
      return {
        ...state,
        headerLogo: action.logo
      };
    }
    case HeaderActionTypes.HeaderSetLinks: {
      return {
        ...state,
        headerLinks: [...action.links]
      };
    }
    case HeaderActionTypes.HeaderAddLink: {
      const stateLinks = state.headerLinks;
      let duplicate = false;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < stateLinks.length; i++) {
        if (arraysEqual(stateLinks[i].url, action.link.url)) {
          duplicate = true;
        }
      }
      if (!duplicate) {
        return {
          ...state,
          headerLinks: [...state.headerLinks, action.link]
        };
      } else {
        return { ...state };
      }
    }
    case HeaderActionTypes.HeaderRemoveLink: {
      const stateLinks = state.headerLinks;
      const newLinks = [];
      for (let i = 0; i < stateLinks.length; i++) {
        if (!arraysEqual(stateLinks[i].url, action.link.url)) {
          newLinks.push(stateLinks[i]);
        }
      }
      return {
        ...state,
        headerLinks: [...newLinks]
      };
    }
    case HeaderActionTypes.HeaderSetSearchParams: {
      return {
        ...state,
        headerSearchParams: [...action.params]
      };
    }
    case HeaderActionTypes.HeaderAddSearchParam: {
      const stateParams = state.headerSearchParams;
      let duplicate = false;
      for (let i = 0; i < stateParams.length; i++) {
        if (
          stateParams[i].value === action.param.value ||
          stateParams[i].label === action.param.label
        ) {
          duplicate = true;
        }
      }
      if (!duplicate) {
        return {
          ...state,
          headerSearchParams: [...state.headerSearchParams, action.param]
        };
      } else {
        return { ...state };
      }
    }
    case HeaderActionTypes.HeaderRemoveSearchParam: {
      const stateParams = state.headerSearchParams;
      const newParams = [];
      for (let i = 0; i < stateParams.length; i++) {
        if (
          stateParams[i].value !== action.param.value &&
          stateParams[i].label !== action.param.label
        ) {
          newParams.push(stateParams[i]);
        }
      }
      return {
        ...state,
        headerSearchParams: [...newParams]
      };
    }
    case HeaderActionTypes.HeaderSetUserAccount: {
      return {
        ...state,
        headerUser: action.user
      };
    }
    case HeaderActionTypes.HeaderMobileMenuOpen: {
      return {
        ...state,
        headerMobileMenuOpen: true
      };
    }
    case HeaderActionTypes.HeaderMobileMenuClose: {
      return {
        ...state,
        headerMobileMenuOpen: false
      };
    }
    default:
      return state;
  }
}

function arraysEqual(array1, array2): boolean {
  if (!array1 || !array2) {
    return false;
  }

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] instanceof Array && array2[i] instanceof Array) {
      return arraysEqual(array1[i], array2[i]);
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

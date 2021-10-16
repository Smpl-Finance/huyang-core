import { LeftnavAction, LeftnavActionTypes } from './leftnav.actions';
import {LeftNavMenuItem} from '../../models/leftnav/leftnav-menu-item.interface';
import {LeftnavFeature} from '../../models/leftnav/leftnav-feature.enum';

export const LEFTNAV_FEATURE_KEY = 'leftnav';

export interface LeftnavState {
  leftnavLoaded: boolean;
  leftnavOpen: boolean;
  leftnavHeaderHeight: number;
  leftnavOpenFeature: LeftnavFeature;
  leftnavHeaderLinks: LeftNavMenuItem[];
}

export interface LeftnavPartialState {
  readonly [LEFTNAV_FEATURE_KEY]: LeftnavState;
}

export const initialState: LeftnavState = {
  leftnavLoaded: false,
  leftnavOpen: true,
  leftnavHeaderHeight: 0,
  leftnavOpenFeature: LeftnavFeature.HISTORY,
  leftnavHeaderLinks: []
};

export function reducer(
  state: LeftnavState = initialState,
  action: LeftnavAction
): LeftnavState {
  switch (action.type) {
    case LeftnavActionTypes.LeftnavInit: {
      return {
        ...initialState
      };
    }
    case LeftnavActionTypes.LeftnavLoad: {
      if (action.links) {
        return {
          ...state,
          leftnavLoaded: true,
          leftnavHeaderLinks: [...action.links]
        };
      } else {
        return {
          ...state,
          leftnavLoaded: true
        };
      }
    }
    case LeftnavActionTypes.LeftnavOpen: {
      return {
        ...state,
        leftnavOpen: true
      };
    }
    case LeftnavActionTypes.LeftnavClose: {
      return {
        ...state,
        leftnavOpen: false
      };
    }
    case LeftnavActionTypes.LeftnavSetHeaderHeight: {
      return {
        ...state,
        leftnavHeaderHeight: action.height
      };
    }
    case LeftnavActionTypes.LeftnavSetHistoryFeature: {
      return {
        ...state,
        leftnavOpenFeature: LeftnavFeature.HISTORY
      };
    }
    case LeftnavActionTypes.LeftnavSetModuleFeature: {
      return {
        ...state,
        leftnavOpenFeature: LeftnavFeature.MODULE
      };
    }
    case LeftnavActionTypes.LeftnavSetHeaderLinks: {
      return {
        ...state,
        leftnavHeaderLinks: [...action.links]
      };
    }
    case LeftnavActionTypes.LeftnavAddHeaderLink: {
      const stateLinks = state.leftnavHeaderLinks;
      let duplicate = false;
      for (let i = 0; i < stateLinks.length; i++) {
        if (
          stateLinks[i].title === action.link.title ||
          stateLinks[i].icon === action.link.icon
        ) {
          duplicate = true;
        }
      }
      if (!duplicate) {
        return {
          ...state,
          leftnavHeaderLinks: [...state.leftnavHeaderLinks, action.link]
        };
      } else {
        return { ...state };
      }
    }
    case LeftnavActionTypes.LeftnavRemoveHeaderLink: {
      const stateLinks = state.leftnavHeaderLinks;
      const newParams = [];
      for (let i = 0; i < stateLinks.length; i++) {
        if (typeof action.link === 'string') {
          if (stateLinks[i].title !== action.link) {
            newParams.push(stateLinks[i]);
          }
        } else {
          if (
            stateLinks[i].title !== action.link.title &&
            stateLinks[i].icon !== action.link.icon
          ) {
            newParams.push(stateLinks[i]);
          }
        }
      }
      return {
        ...state,
        leftnavHeaderLinks: [...newParams]
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

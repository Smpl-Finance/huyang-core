import { Action } from '@ngrx/store';
import {LeftNavMenuItem} from '../../models/leftnav/leftnav-menu-item.interface';

export enum LeftnavActionTypes {
  LeftnavInit = '[Leftnav] Initialize Left Nav',
  LeftnavLoad = '[Leftnav] Load Left Nav',
  LeftnavOpen = '[Leftnav] Open Left Nav',
  LeftnavClose = '[Leftnav] Close Left Nav',
  LeftnavSetHeaderHeight = '[Leftnav] Set Header Height',
  LeftnavSetHistoryFeature = '[Leftnav] Set History Feature',
  LeftnavSetModuleFeature = '[Leftnav] Set Module Feature',
  LeftnavSetHeaderLinks = '[Leftnav] Set Header Links',
  LeftnavAddHeaderLink = '[Leftnav] Add Header Link',
  LeftnavRemoveHeaderLink = '[Leftnav] Remove Header Link'
}

export class LeftnavInit implements Action {
  readonly type = LeftnavActionTypes.LeftnavInit;
}

export class LeftnavLoad implements Action {
  readonly type = LeftnavActionTypes.LeftnavLoad;
  constructor(public links?: LeftNavMenuItem[]) {}
}

export class LeftnavOpen implements Action {
  readonly type = LeftnavActionTypes.LeftnavOpen;
}

export class LeftnavClose implements Action {
  readonly type = LeftnavActionTypes.LeftnavClose;
}

export class LeftnavSetHeaderHeight implements Action {
  readonly type = LeftnavActionTypes.LeftnavSetHeaderHeight;
  constructor(public height: number) {}
}

export class LeftnavSetHistoryFeature implements Action {
  readonly type = LeftnavActionTypes.LeftnavSetHistoryFeature;
}

export class LeftnavSetModuleFeature implements Action {
  readonly type = LeftnavActionTypes.LeftnavSetModuleFeature;
}

export class LeftnavSetHeaderLinks implements Action {
  readonly type = LeftnavActionTypes.LeftnavSetHeaderLinks;
  constructor(public links: LeftNavMenuItem[]) {}
}

export class LeftnavAddHeaderLink implements Action {
  readonly type = LeftnavActionTypes.LeftnavAddHeaderLink;
  constructor(public link: LeftNavMenuItem) {}
}

export class LeftnavRemoveHeaderLink implements Action {
  readonly type = LeftnavActionTypes.LeftnavRemoveHeaderLink;
  constructor(public link: LeftNavMenuItem | string) {}
}

export type LeftnavAction =
  | LeftnavInit
  | LeftnavLoad
  | LeftnavOpen
  | LeftnavClose
  | LeftnavSetHeaderHeight
  | LeftnavSetHistoryFeature
  | LeftnavSetModuleFeature
  | LeftnavSetHeaderLinks
  | LeftnavAddHeaderLink
  | LeftnavRemoveHeaderLink;

export const fromLeftnavActions = {
  LeftnavInit,
  LeftnavLoad,
  LeftnavOpen,
  LeftnavClose,
  LeftnavSetHeaderHeight,
  LeftnavSetHistoryFeature,
  LeftnavSetModuleFeature,
  LeftnavSetHeaderLinks,
  LeftnavAddHeaderLink,
  LeftnavRemoveHeaderLink
};

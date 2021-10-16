import { Action } from '@ngrx/store';
import {
  HuyangHeaderLinkModel,
} from '../../models/huyang-header/huyang-header-link.model';
import {HuyangUserAccountModel} from '../../models/huyang-user-account.model';
import {HuyangHeaderSearchParamModel} from '../../models/huyang-header/huyang-header-search-param.model';

export enum HeaderActionTypes {
  HeaderInit = '[Header] Initialize Header',
  HeaderLoad = '[Header] Load Header',
  HeaderSetLoad = '[Header] Set Header Load',
  HeaderSetTitle = '[Header] Set Header Title',
  HeaderSetLogo = '[Header] Set Header Logo',
  HeaderSetLinks = '[Header] Set Header Links',
  HeaderAddLink = '[Header] Add Header Link',
  HeaderRemoveLink = '[Header] Remove Header Link',
  HeaderSetSearchParams = '[Header] Set Header Search Params',
  HeaderAddSearchParam = '[Header] Add Header Search Param',
  HeaderRemoveSearchParam = '[Header] Remove Header Search Param',
  HeaderSetUserAccount = '[Header] Set Header User Account',
  HeaderMobileMenuOpen = '[Header] Mobile Header Menu Open',
  HeaderMobileMenuClose = '[Header] Mobile Header Menu Close'
}

export class HeaderInit implements Action {
  readonly type = HeaderActionTypes.HeaderInit;
}

export class HeaderLoad implements Action {
  readonly type = HeaderActionTypes.HeaderLoad;
  constructor(
    public title: string,
    public logo: string,
    public links: HuyangHeaderLinkModel[],
    public params: HuyangHeaderSearchParamModel[],
    public user: HuyangUserAccountModel
  ) {}
}

export class HeaderSetLoad implements Action {
  readonly type = HeaderActionTypes.HeaderSetLoad;
}

export class HeaderSetTitle implements Action {
  readonly type = HeaderActionTypes.HeaderSetTitle;
  constructor(public title: string) {}
}

export class HeaderSetLogo implements Action {
  readonly type = HeaderActionTypes.HeaderSetLogo;
  constructor(public logo: string) {}
}

export class HeaderSetLinks implements Action {
  readonly type = HeaderActionTypes.HeaderSetLinks;
  constructor(public links: HuyangHeaderLinkModel[]) {}
}

export class HeaderAddLink implements Action {
  readonly type = HeaderActionTypes.HeaderAddLink;
  constructor(public link: HuyangHeaderLinkModel) {}
}

export class HeaderRemoveLink implements Action {
  readonly type = HeaderActionTypes.HeaderRemoveLink;
  constructor(public link: HuyangHeaderLinkModel) {}
}

export class HeaderSetSearchParams implements Action {
  readonly type = HeaderActionTypes.HeaderSetSearchParams;
  constructor(public params: HuyangHeaderSearchParamModel[]) {}
}

export class HeaderAddSearchParam implements Action {
  readonly type = HeaderActionTypes.HeaderAddSearchParam;
  constructor(public param: HuyangHeaderSearchParamModel) {}
}

export class HeaderRemoveSearchParam implements Action {
  readonly type = HeaderActionTypes.HeaderRemoveSearchParam;
  constructor(public param: HuyangHeaderSearchParamModel) {}
}

export class HeaderSetUserAccount implements Action {
  readonly type = HeaderActionTypes.HeaderSetUserAccount;
  constructor(public user: HuyangUserAccountModel) {}
}

export class HeaderMobileMenuOpen implements Action {
  readonly type = HeaderActionTypes.HeaderMobileMenuOpen;
}

export class HeaderMobileMenuClose implements Action {
  readonly type = HeaderActionTypes.HeaderMobileMenuClose;
}

export type HeaderAction =
  | HeaderInit
  | HeaderLoad
  | HeaderSetLoad
  | HeaderSetTitle
  | HeaderSetLogo
  | HeaderSetLinks
  | HeaderAddLink
  | HeaderRemoveLink
  | HeaderSetSearchParams
  | HeaderAddSearchParam
  | HeaderRemoveSearchParam
  | HeaderSetUserAccount
  | HeaderMobileMenuOpen
  | HeaderMobileMenuClose;

export const fromHeaderActions = {
  HeaderInit,
  HeaderLoad,
  HeaderSetLoad,
  HeaderSetTitle,
  HeaderSetLogo,
  HeaderSetLinks,
  HeaderAddLink,
  HeaderRemoveLink,
  HeaderSetSearchParams,
  HeaderAddSearchParam,
  HeaderRemoveSearchParam,
  HeaderSetUserAccount,
  HeaderMobileMenuOpen,
  HeaderMobileMenuClose
};

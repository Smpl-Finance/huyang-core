import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { HeaderPartialState } from './header.reducer';
import { headerQuery } from './header.selectors';
import {
  HeaderLoad,
  HeaderSetTitle,
  HeaderSetLogo,
  HeaderSetLinks,
  HeaderAddLink,
  HeaderRemoveLink,
  HeaderSetUserAccount,
  HeaderMobileMenuOpen,
  HeaderMobileMenuClose,
  HeaderInit,
  HeaderSetLoad
} from './header.actions';
import {
  HuyangHeaderLinkModel,
} from '../../models/huyang-header/huyang-header-link.model';
import {HuyangUserAccountModel} from '../../models/huyang-user-account.model';
import {HuyangHeaderInitModel} from '../../models/huyang-header/huyang-header-init.model';
import {HuyangHeaderSearchParamModel} from '../../models/huyang-header/huyang-header-search-param.model';

@Injectable()
export class HeaderFacade {
  headerLoaded$ = this.headerStore.pipe(select(headerQuery.getHeaderLoaded));
  headerTitle$ = this.headerStore.pipe(select(headerQuery.getHeaderTitle));
  headerLogo$ = this.headerStore.pipe(select(headerQuery.getHeaderLogo));
  headerSearchParams$ = this.headerStore.pipe(
    select(headerQuery.getHeaderSearchParams)
  );
  headerLinks$ = this.headerStore.pipe(select(headerQuery.getHeaderLinks));
  headerUserAccount$ = this.headerStore.pipe(
    select(headerQuery.getHuyangUserAccount)
  );
  headerMobileMenuState$ = this.headerStore.pipe(
    select(headerQuery.getHeaderMobileMenuOpen)
  );

  constructor(private headerStore: Store<HeaderPartialState>) {}

  headerInit() {
    this.headerStore.dispatch(new HeaderInit());
  }

  headerLoad(
    title: string | HuyangHeaderInitModel,
    logo: string = '',
    links: HuyangHeaderLinkModel[] = [],
    params: HuyangHeaderSearchParamModel[] = [],
    user: HuyangUserAccountModel = null
  ) {
    if (typeof title === 'string') {
      this.headerStore.dispatch(
        new HeaderLoad(title ? title : '', logo, links, params, user)
      );
    } else {
      this.headerStore.dispatch(
        new HeaderLoad(
          title.title ? title.title : '',
          title.logo,
          title.headerLinks,
          title.headerSearchParams,
          title.user
        )
      );
    }
  }

  headerSetLoad() {
    this.headerStore.dispatch(new HeaderSetLoad());
  }

  headerSetTitle(title: string) {
    this.headerStore.dispatch(new HeaderSetTitle(title));
  }

  headerSetLogo(logo: string) {
    this.headerStore.dispatch(new HeaderSetLogo(logo));
  }

  headerSetLinks(links: HuyangHeaderLinkModel[]) {
    this.headerStore.dispatch(new HeaderSetLinks(links));
  }

  // headerSetSearchParams(params: HeaderSearchParam[]) {
  //   this.headerStore.dispatch(new HeaderSetSearchParams(params));
  // }

  headerSetUserAccount(user: HuyangUserAccountModel) {
    this.headerStore.dispatch(new HeaderSetUserAccount(user));
  }

  headerAddLink(link: HuyangHeaderLinkModel) {
    this.headerStore.dispatch(new HeaderAddLink(link));
  }

  headerRemoveLink(link: HuyangHeaderLinkModel) {
    this.headerStore.dispatch(new HeaderRemoveLink(link));
  }

  // headerAddSearchParam(param: HeaderSearchParam) {
  //   this.headerStore.dispatch(new HeaderAddSearchParam(param));
  // }

  // headerRemoveSearchParam(param: HeaderSearchParam) {
  //   this.headerStore.dispatch(new HeaderRemoveSearchParam(param));
  // }

  headerOpenMobileMenu() {
    this.headerStore.dispatch(new HeaderMobileMenuOpen());
  }

  headerCloseMobileMenu() {
    this.headerStore.dispatch(new HeaderMobileMenuClose());
  }
}

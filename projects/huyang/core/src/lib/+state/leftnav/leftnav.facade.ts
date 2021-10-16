import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { LeftnavPartialState } from './leftnav.reducer';
import { leftnavQuery } from './leftnav.selectors';
import {
  LeftnavLoad,
  LeftnavOpen,
  LeftnavClose,
  LeftnavSetHeaderHeight,
  LeftnavInit,
  LeftnavSetHistoryFeature,
  LeftnavSetModuleFeature,
  LeftnavSetHeaderLinks,
  LeftnavAddHeaderLink,
  LeftnavRemoveHeaderLink
} from './leftnav.actions';
import {LeftNavMenuItem} from '../../models/leftnav/leftnav-menu-item.interface';

@Injectable()
export class LeftnavFacade {
  leftnavLoaded$ = this.store.pipe(select(leftnavQuery.getLeftnavLoaded));
  leftnavOpenClosedState$ = this.store.pipe(
    select(leftnavQuery.getLeftnavOpenState)
  );
  leftnavHeaderHeight$ = this.store.pipe(
    select(leftnavQuery.getLeftnavHeaderHeight)
  );
  leftnavOpenFeature$ = this.store.pipe(
    select(leftnavQuery.getLeftnavOpenFeatureState)
  );
  leftnavHeaderLinks$ = this.store.pipe(
    select(leftnavQuery.getLeftnavHeaderLinks)
  );

  constructor(private store: Store<LeftnavPartialState>) {}

  leftnavInit() {
    this.store.dispatch(new LeftnavInit());
  }

  leftnavLoad(links?: LeftNavMenuItem[]) {
    this.store.dispatch(new LeftnavLoad(links));
  }

  leftnavOpen() {
    this.store.dispatch(new LeftnavOpen());
  }

  leftnavClose() {
    this.store.dispatch(new LeftnavClose());
  }

  leftnavSetHeaderHeight(height: number) {
    this.store.dispatch(new LeftnavSetHeaderHeight(height));
  }

  leftnavSetHistoryFeature() {
    this.store.dispatch(new LeftnavSetHistoryFeature());
  }

  leftnavSetModuleFeature() {
    this.store.dispatch(new LeftnavSetModuleFeature());
  }

  leftnavSetHeaderLinks(links: LeftNavMenuItem[]) {
    this.store.dispatch(new LeftnavSetHeaderLinks(links));
  }

  leftnavAddHeaderLink(link: LeftNavMenuItem) {
    this.store.dispatch(new LeftnavAddHeaderLink(link));
  }

  leftnavRemoveHeaderLink(variable: LeftNavMenuItem | string) {
    this.store.dispatch(new LeftnavRemoveHeaderLink(variable));
  }
}

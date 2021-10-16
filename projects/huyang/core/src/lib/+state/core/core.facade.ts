import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { CorePartialState } from './core.reducer';
import { coreQuery } from './core.selectors';
import { CoreLoad, CoreInit, CoreSetModuleTitle } from './core.actions';

@Injectable()
export class CoreFacade {
  coreLoaded$ = this.store.pipe(select(coreQuery.getCoreLoaded));

  constructor(private store: Store<CorePartialState>) {}

  coreInit() {
    this.store.dispatch(new CoreInit());
  }

  coreLoad() {
    this.store.dispatch(new CoreLoad());
  }

  coreSetModuleTitle(title: string) {
    this.store.dispatch(new CoreSetModuleTitle(title));
  }
}

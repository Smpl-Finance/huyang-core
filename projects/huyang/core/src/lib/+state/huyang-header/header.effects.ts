import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { HeaderPartialState } from './header.reducer';
import { HeaderLoad, HeaderActionTypes } from './header.actions';

@Injectable()
export class HeaderEffects {
  // @Effect() loadHeader$ = this.dataPersistence.fetch(
  //     HeaderActionTypes.LoadHeader,
  //     {
  //         run: (action: LoadHeader, state: HeaderPartialState) => {
  //             // Your custom REST 'load' logic goes here. For now just return an empty list...
  //             return new HeaderLoaded(true);
  //         },
  //     }
  // );

  constructor(
    private actions$: Actions,
  ) {}
}

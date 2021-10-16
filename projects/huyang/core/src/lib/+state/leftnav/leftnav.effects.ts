import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';

import {LeftnavPartialState} from './leftnav.reducer';

@Injectable()
export class LeftnavEffects {
  // @Effect() loadLeftnav$ = this.dataPersistence.fetch(
  //   LeftnavActionTypes.LoadLeftnav,
  //   {
  //     run: (action: LoadLeftnav, state: LeftnavPartialState) => {
  //       // Your custom REST 'load' logic goes here. For now just return an empty list...
  //       return new LeftnavLoaded([]);
  //     },

  //     onError: (action: LoadLeftnav, error) => {
  //       console.error('Error', error);
  //       return new LeftnavLoadError(error);
  //     }
  //   }
  // );

  constructor(
    private actions$: Actions
  ) {}
}

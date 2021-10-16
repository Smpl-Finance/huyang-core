import { TestBed, waitForAsync } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { LeftnavEffects } from './leftnav.effects';
import { LoadLeftnav, LeftnavLoaded } from './leftnav.actions';

describe('LeftnavEffects', () => {
  let actions: Observable<any>;
  let effects: LeftnavEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        LeftnavEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(LeftnavEffects);
  });

  describe('loadLeftnav$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadLeftnav() });
      expect(effects.loadLeftnav$).toBeObservable(
        hot('-a-|', { a: new LeftnavLoaded([]) })
      );
    });
  });
});

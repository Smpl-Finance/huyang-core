import { TestBed, waitForAsync } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { HeaderEffects } from './header.effects';
import { LoadHeader, HeaderLoaded } from './header.actions';

describe('HeaderEffects', () => {
  let actions: Observable<any>;
  let effects: HeaderEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        HeaderEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(HeaderEffects);
  });

  describe('loadHeader$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadHeader() });
      expect(effects.loadHeader$).toBeObservable(
        hot('-a-|', { a: new HeaderLoaded([]) })
      );
    });
  });
});

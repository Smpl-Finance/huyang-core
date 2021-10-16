import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { LeftnavEffects } from './leftnav.effects';
import { LeftnavFacade } from './leftnav.facade';

import { leftnavQuery } from './leftnav.selectors';
import { LoadLeftnav, LeftnavLoaded } from './leftnav.actions';
import { LeftnavState, Entity, initialState, reducer } from './leftnav.reducer';

interface TestSchema {
  leftnav: LeftnavState;
}

describe('LeftnavFacade', () => {
  let facade: LeftnavFacade;
  let store: Store<TestSchema>;
  let createLeftnav;

  beforeEach(() => {
    createLeftnav = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('leftnav', reducer, { initialState }),
          EffectsModule.forFeature([LeftnavEffects])
        ],
        providers: [LeftnavFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(LeftnavFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allLeftnav$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allLeftnav$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `LeftnavLoaded` to manually submit list for state management
     */
    it('allLeftnav$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allLeftnav$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new LeftnavLoaded([createLeftnav('AAA'), createLeftnav('BBB')])
        );

        list = await readFirst(facade.allLeftnav$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});

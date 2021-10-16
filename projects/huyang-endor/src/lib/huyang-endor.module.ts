import {NgModule} from '@angular/core';
import {HuyangEndorComponent} from './huyang-endor.component';
import {HuyangCoreInterface} from '../../../huyang/core/src/lib/huyang-core.interface';
import {HuyangModuleManagerService} from '../../../huyang/core/src/lib/services/huyang-module-manager.service';
import {AngularD3TreeLibModule} from 'angular-d3-tree';
import {EndorSidenavComponent} from './components/endor-sidenav/endor-sidenav.component';
import {RouterModule} from '@angular/router';
import {MatCardModule, MatGridListModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {createAction, createReducer, on, State, StoreModule} from '@ngrx/store';
import * as fromEndorState from './reducers';


@NgModule({
  entryComponents: [HuyangEndorComponent, EndorSidenavComponent],
  declarations: [HuyangEndorComponent, EndorSidenavComponent],
  imports: [
    AngularD3TreeLibModule,
    RouterModule,
    MatCardModule,
    MatGridListModule,
    BrowserModule
  ],
  exports: [HuyangEndorComponent]
})
export class HuyangEndorModule implements HuyangCoreInterface {
  constructor(private moduleManager: HuyangModuleManagerService) {
  }

  huyangModuleInit() {

    this.moduleManager.registerModule(
      {
        rootPath: 'endor',
        homeComponent: HuyangEndorComponent,
        featureKey: fromEndorState.endorStateFeatureKey,
        reducer: fromEndorState.endorStateReducer
      },
      {rootPath: 'endorSide', sidenavComponent: EndorSidenavComponent}
    );
  }
}

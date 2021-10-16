import {NgModule} from '@angular/core';
import {HuyangCoreTestContentComponent} from './huyang-core-test-content.component';
import {PageTwoComponent} from './components/page-two/page-two.component';
import {HuyangCoreInterface} from '../../../huyang/core/src/lib/huyang-core.interface';
import {Store} from '@ngrx/store';
import {Route, Router, RouterModule} from '@angular/router';
import {HuyangModuleManagerService} from '../../../huyang/core/src/lib/services/huyang-module-manager.service';
import {TestSidenavComponent} from './components/test-sidenav/test-sidenav.component';
import {CommonModule} from '@angular/common';
import {huyangCoreTestContentStateFeatureKey, testContentReducer} from './reducers';

const routes: Route[] = [
  {
    path: 'test-content',
    component: HuyangCoreTestContentComponent,
    children: [
      {path: '2', component: PageTwoComponent}
    ]
  }
];

@NgModule({
  entryComponents: [HuyangCoreTestContentComponent, TestSidenavComponent],
  declarations: [HuyangCoreTestContentComponent, PageTwoComponent, TestSidenavComponent],
  imports: [
    RouterModule.forChild([]),
    CommonModule
  ],
  exports: []
})
export class HuyangCoreTestContentModule implements HuyangCoreInterface {
  constructor(private store: Store<any>, private router: Router, private moduleManager: HuyangModuleManagerService) {
  }

  huyangModuleInit() {
    this.moduleManager.registerModule(
      {
        rootPath: 'test-content',
        homeComponent: HuyangCoreTestContentComponent,
        featureKey: huyangCoreTestContentStateFeatureKey,
        reducer: testContentReducer
      },
      {rootPath: 'testSide', sidenavComponent: TestSidenavComponent}
    );
  }
}

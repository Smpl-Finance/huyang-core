import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {RegisterModuleEffect} from './+state/effects/register-module.effect';
import {HuyangCoreComponent} from './huyang-core.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {addToSiteMapReducer, siteMapFeatureKey} from './+state/reducers/huyang-add-to-site-map.reducer';
import {HuyangHomeComponent} from './components/huyang-home/huyang-home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HuyangAuthCallbackComponent} from './components/huyang-auth-callback/huyang-auth-callback.component';
import {HuyangUserProfileComponent} from './components/huyang-user-profile/huyang-user-profile.component';
import {HuyangCoreRoutingModule} from './huyang-core-routing.module';
import {HuyangAuthService} from './services/huyang-auth.service';
import {HuyangHeaderComponent} from './components/huyang-header/huyang-header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HuyangLeftNavComponent} from './components/left-nav/huyang-left-nav.component';
import {HuyangLeftNavHeaderComponent as LeftNavHeaderComponent} from './components/left-nav/header/huyang-left-nav-header.component';
import {HistoryContentComponent} from './components/left-nav/history-content/history-content.component';
import {ModuleContentComponent} from './components/left-nav/module-content/module-content.component';
import {HuyangHeaderRightComponent} from './components/huyang-header/right/huyang-header-right.component';
import {HuyangHeaderLeftComponent} from './components/huyang-header/left/huyang-header-left.component';
import {HuyangHeaderCenterComponent} from './components/huyang-header/center/huyang-header-center.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CoreFacade} from './+state/core/core.facade';
import {LeftnavFacade} from './+state/leftnav/leftnav.facade';
import {HeaderFacade} from './+state/huyang-header/header.facade';
import {HEADER_FEATURE_KEY, reducer as headerReducer} from './+state/huyang-header/header.reducer';
import {
  initialState as leftNavInitialState,
  reducer as leftNavReducer,
  LEFTNAV_FEATURE_KEY
} from './+state/leftnav/leftnav.reducer';
import {reducer as coreReducer, CORE_FEATURE_KEY} from './+state/core/core.reducer';
import {LeftnavEffects} from './+state/leftnav/leftnav.effects';
import {HeaderEffects} from './+state/huyang-header/header.effects';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    HuyangCoreComponent,
    HuyangHeaderComponent,
    HuyangHeaderComponent,
    HuyangHomeComponent,
    HuyangAuthCallbackComponent,
    HuyangUserProfileComponent,
    HuyangLeftNavComponent,
    LeftNavHeaderComponent,
    HistoryContentComponent,
    ModuleContentComponent,
    HuyangHeaderRightComponent,
    HuyangHeaderLeftComponent,
    HuyangHeaderCenterComponent
  ],
  imports: [
    ReactiveFormsModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatToolbarModule,
    HuyangCoreRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forFeature(siteMapFeatureKey, addToSiteMapReducer),
    StoreModule.forFeature(HEADER_FEATURE_KEY, headerReducer),
    StoreModule.forFeature(LEFTNAV_FEATURE_KEY, leftNavReducer, {initialState: leftNavInitialState}),
    StoreModule.forFeature(CORE_FEATURE_KEY, coreReducer),
    EffectsModule.forFeature([LeftnavEffects]),
    EffectsModule.forFeature([HeaderEffects]),
    EffectsModule.forFeature([RegisterModuleEffect]),
    MatSidenavModule,
    CommonModule,
    MatButtonModule,
    NgbModule
  ],
  providers: [HuyangAuthService, CoreFacade, LeftnavFacade, HeaderFacade],
  exports: [HuyangCoreComponent, HuyangAuthCallbackComponent]
})
export class HuyangCoreModule {
  constructor() {
    // console.log('HuyangCoreModule loaded');
  }
}

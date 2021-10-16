import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {createReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {HuyangCoreModule} from '../../../huyang/core/src/lib/huyang-core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HuyangCoreTestContentModule} from '../../../huyang-core-test-content/src/lib/huyang-core-test-content.module';
import {HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {HuyangEndorModule} from '../../../huyang-endor/src/lib/huyang-endor.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    HttpClientModule,
    HuyangCoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    HuyangCoreTestContentModule,
    HuyangEndorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

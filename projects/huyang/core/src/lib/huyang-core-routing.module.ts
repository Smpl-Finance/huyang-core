import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {HuyangHomeComponent} from './components/huyang-home/huyang-home.component';
import {HuyangUserProfileComponent} from './components/huyang-user-profile/huyang-user-profile.component';
import {HuyangAuthGuard} from './guards/huyang-auth.guard';
import {HuyangAuthCallbackComponent} from './components/huyang-auth-callback/huyang-auth-callback.component';
import {HUYANG_CORE_ROUTE_AUTH_CALLBACK, HUYANG_CORE_ROUTE_PROFILE} from './huyang-router-constants';


const routes: Array<Route> = [
  {path: '', component: HuyangHomeComponent},
  {path: HUYANG_CORE_ROUTE_PROFILE, component: HuyangUserProfileComponent, canActivate: [HuyangAuthGuard]},
  {path: HUYANG_CORE_ROUTE_AUTH_CALLBACK, component: HuyangAuthCallbackComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HuyangCoreRoutingModule { }

import {Injectable} from '@angular/core';
import {SiteMapModuleModel} from '../models/site-map-module.model';
import {ReducerManager, Store} from '@ngrx/store';
import {addToSiteMapActionType} from '../+state/actions/huyang-sitemap.actions';
import {Route, Router} from '@angular/router';
import {HUYANG_CORE_OUTLET_SIDENAV} from '../huyang-router-constants';
import {HuyangSidenavFilterGuard} from '../guards/huyang-sidenav-filter.guard';

@Injectable({
  providedIn: 'root'
})
export class HuyangModuleManagerService {
  public readonly sidenavRoutes: Map<string, string> = new Map<string, string>();

  constructor(private store: Store<any>, private router: Router, private reducerManager: ReducerManager) {
  }

  registerModule(module: SiteMapModuleModel, sidenav?): void {
    this.registerMain(module);

    if (sidenav) {
      this.registerSidenav(sidenav, module.rootPath);
    }

    if (module.reducer) {
      this.registerReducer(module);
    }

  }

  private registerReducer(module: SiteMapModuleModel) {
    this.reducerManager.addFeature(
      {
        key: module.featureKey,
        reducers: module.reducer,
        reducerFactory: null
      }
    );
  }

  private registerSidenav(sidenav, rootPath) {
    let sideRoute = `(sidenav:${sidenav.rootPath})`;
    if (!sidenav.rootPath) {
      sideRoute = '';
    }
    this.sidenavRoutes.set(rootPath, sideRoute);
    this.router.config.push(
      {
        path: sidenav.rootPath,
        component: sidenav.sidenavComponent,
        outlet: HUYANG_CORE_OUTLET_SIDENAV,
      }
    );
  }

  private registerMain(module: SiteMapModuleModel) {
    const foundInConfig = this.router.config.find(route => route.path === module.rootPath && route.outlet === null);
    if (foundInConfig) {
      throw new Error(`rootPath(${module.rootPath}) path defined in app`);
    }
    this.router.config.push(
      {
        path: module.rootPath,
        component: module.homeComponent,
        canActivate: [HuyangSidenavFilterGuard]
      }
    );
    this.store.dispatch(
      {
        type: addToSiteMapActionType,
        moduleInfo: module,
      }
    );
  }
}

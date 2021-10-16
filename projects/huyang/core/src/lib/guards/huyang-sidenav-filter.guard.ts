import {Injectable, Injector} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {HuyangModuleManagerService} from '../services/huyang-module-manager.service';

interface RouteParts {
  primary: string;
  sidenav: string;
}

@Injectable({
  providedIn: 'root'
})
export class HuyangSidenavFilterGuard implements CanActivate {
  private firstTime = false;

  constructor(private router: Router, private injector: Injector) {
  }

  private getCorrectedRoute(state: RouterStateSnapshot): RouteParts | undefined {

    let partsMatches: RegExpExecArray;
    partsMatches = /^(\/?)([a-z0-9-]+)\/?((?:[^/]*\/)*)([a-z0-9]*)(\(sidenav:[a-z0-9]+\))?/i.exec(state.url);
    const currentPartsMatches = /^(\/?)([a-z0-9-]+)?\/?((?:[^/]*\/)*)([a-z0-9]*)(\(sidenav:[a-z0-9]+\))?/i.exec(this.router.url);
    const primaryMatches = /^\/?([a-z0-9/-]*)/.exec(state.url);
    if (partsMatches.length !== 6 || primaryMatches.length !== 2 || currentPartsMatches.length !== 6) {
      return;
    }

    const moduleService = this.injector.get(HuyangModuleManagerService);
    if (!moduleService) {
      return;
    }

    const base = partsMatches[2];
    const primary = primaryMatches[1];
    let sidenav = partsMatches[5];
    if (moduleService.sidenavRoutes.has(base)) {
      const configuredSidenav = moduleService.sidenavRoutes.get(base);
      if (configuredSidenav !== sidenav) {
        sidenav = moduleService.sidenavRoutes.get(base);
        return {
          primary,
          sidenav
        };
      }
    }
    return;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const correctedRoute = this.getCorrectedRoute(state);
    if (correctedRoute) {
      this.firstTime = true;
      const newUrl = `/${correctedRoute.primary}${correctedRoute.sidenav}`;
      return this.router.parseUrl(newUrl);
    }
    return true;
  }
}

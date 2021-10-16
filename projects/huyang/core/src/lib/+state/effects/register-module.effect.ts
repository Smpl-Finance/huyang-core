import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {Injectable} from '@angular/core';
import {AddToSiteMapActionPropType, addToSiteMapActionType} from '../actions/huyang-sitemap.actions';
import {Router} from '@angular/router';
import {mergeMap} from 'rxjs/operators';

@Injectable()
export class RegisterModuleEffect {
  // registerModule$ = createEffect(
  //   () => this.actions.pipe(
  //     ofType(addToSiteMapActionType),
  //     mergeMap(
  //       (t: AddToSiteMapActionPropType) => {
  //         console.log(`${RegisterModuleEffect.name} t is`, t);
  //         // this.router.config.unshift({path: t.moduleInfo.path, component: t.moduleInfo.homeComponent});
  //         return of({type: '[]'});
  //       }
  //     )
  //   )
  // );

  constructor(private actions: Actions, private router: Router) {
  }
}

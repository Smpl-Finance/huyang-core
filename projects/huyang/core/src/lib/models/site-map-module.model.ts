import {Type} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Action, ActionReducer, ActionReducerMap} from '@ngrx/store';

export interface SiteMapModuleModel {
  rootPath: string;
  homeComponent: Type<any>;
  featureKey?: string;
  guards?: Array<CanActivate>;
  reducer?: ActionReducer<any, Action> | ActionReducerMap<any, Action>;
}

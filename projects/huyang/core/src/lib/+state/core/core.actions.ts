import { Action } from '@ngrx/store';

export enum CoreActionTypes {
  CoreInit = '[Core] Initialize Core',
  CoreLoad = '[Core] Load Core',
  CoreSetModuleTitle = '[Core] Set Module Title'
}

export class CoreInit implements Action {
  readonly type = CoreActionTypes.CoreInit;
}

export class CoreLoad implements Action {
  readonly type = CoreActionTypes.CoreLoad;
}

export class CoreSetModuleTitle implements Action {
  readonly type = CoreActionTypes.CoreSetModuleTitle;
  constructor(public title: string) {}
}

export type CoreAction = CoreInit | CoreLoad | CoreSetModuleTitle;

export const fromCoreActions = {
  CoreInit,
  CoreLoad,
  CoreSetModuleTitle
};

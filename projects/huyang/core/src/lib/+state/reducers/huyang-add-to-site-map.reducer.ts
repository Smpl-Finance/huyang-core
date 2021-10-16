import { createReducer, on } from '@ngrx/store';
import {addToSiteMap} from '../actions/huyang-sitemap.actions';
import {HuyangSiteMapStateModel} from './huyang-site-map-state.model';

export const siteMapFeatureKey = 'huyang-site-map';

const onAddToSiteMapFunction = (state: HuyangSiteMapStateModel, {moduleInfo}) => {
  const nState: HuyangSiteMapStateModel = {...state};
  if (!nState.modules) { nState.modules = []; }
  nState.modules.push(moduleInfo);
  return nState;
};

// @ts-ignore
const addToSiteMapReducerInt = createReducer({},
  on(addToSiteMap, onAddToSiteMapFunction),
);

export function addToSiteMapReducer(state, action) {
  return addToSiteMapReducerInt(state, action);
}

import {createAction, props} from '@ngrx/store';
import {SiteMapModuleModel} from '../../models/site-map-module.model';

export const addToSiteMapActionType = '[Site Map] Add';

export interface AddToSiteMapActionPropType {
  moduleInfo: SiteMapModuleModel;
}

export const addToSiteMap = createAction(addToSiteMapActionType, props<AddToSiteMapActionPropType>());

import {HuyangHeaderLinkModel} from './huyang-header-link.model';
import {HuyangUserAccountModel} from '../huyang-user-account.model';
import {HuyangHeaderSearchParamModel} from './huyang-header-search-param.model';

export interface HuyangHeaderInitModel {
  title?: string;
  logo?: string;
  headerLinks?: HuyangHeaderLinkModel[];
  headerSearchParams?: HuyangHeaderSearchParamModel[];
  user?: HuyangUserAccountModel;
}

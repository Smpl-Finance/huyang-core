import { Component, OnInit } from '@angular/core';
import {SiteMapModuleModel} from '../../../models/site-map-module.model';
import {Observable} from 'rxjs';
import {siteMapFeatureKey} from '../../../+state/reducers/huyang-add-to-site-map.reducer';
import {HuyangSiteMapStateModel} from '../../../+state/reducers/huyang-site-map-state.model';
import {Store} from '@ngrx/store';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leftnav-module-content',
  templateUrl: './module-content.component.html',
  styleUrls: ['./module-content.component.scss']
})
export class ModuleContentComponent implements OnInit {
  appModules: Observable<SiteMapModuleModel[]>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.appModules = this.store.select(
      state => {
        const modulesKeyName = 'modules';
        if (state[siteMapFeatureKey] && state[siteMapFeatureKey][modulesKeyName]) {
          return (state[siteMapFeatureKey] as HuyangSiteMapStateModel).modules;
        }
        return [];
      }
    );
  }

}

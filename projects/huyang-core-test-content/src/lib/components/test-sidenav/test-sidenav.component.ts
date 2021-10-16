import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {huyangCoreTestContentStateFeatureKey, SidenavItem, TestContentState} from '../../reducers';

@Component({
  selector: 'lib-test-sidenav',
  templateUrl: './test-sidenav.component.html',
  styleUrls: ['./test-sidenav.component.css']
})
export class TestSidenavComponent implements OnInit {
  menuItems: Observable<SidenavItem[]>;

  constructor(private store: Store<any>) {
    this.menuItems = this.store.select(
      state => {
        const sidenavListKeyName = 'sidenavList';
        if (state[huyangCoreTestContentStateFeatureKey] && state[huyangCoreTestContentStateFeatureKey][sidenavListKeyName]) {
          return (state[huyangCoreTestContentStateFeatureKey] as TestContentState).sidenavList;
        }
        return [];
      }
    );
    this.menuItems.subscribe(
      (state: SidenavItem[]) => {
        // console.log('state in test sidenav', state);
      }
    );
  }

  ngOnInit() {
  }

}

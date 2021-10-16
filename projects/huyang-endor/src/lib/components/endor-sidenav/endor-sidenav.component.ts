import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {createSelector, State, Store} from '@ngrx/store';
import {AccountViewModel, EndorState, endorStateFeatureKey} from '../../reducers';

const selectFeature = (state) => {
  // console.log('selectFeature state', state);

  const currentAccountKeyName = 'currentAccount';
  if (state[endorStateFeatureKey] && state[endorStateFeatureKey][currentAccountKeyName]) {
    return (state[endorStateFeatureKey] as EndorState).currentAccount;
  }
  return;
  // return state[endorStateFeatureKey];
};

const selectFeature2 = createSelector(
  selectFeature,
  (state: AccountViewModel) => {
    // console.log('selectFeature2 state', state);
    return state;
  }
);

@Component({
  selector: 'lib-endor-sidenav',
  templateUrl: './endor-sidenav.component.html',
  styleUrls: ['./endor-sidenav.component.css']
})
export class EndorSidenavComponent implements OnInit {

  profile: Observable<AccountViewModel>;
  showProfile = false;

  constructor(private store: Store<any>) {
    this.profile = store.select(selectFeature2);
  }

  ngOnInit() {
    this.profile.subscribe(
      (profile: AccountViewModel) => {
        // console.log(`BLA BLA ${EndorSidenavComponent.name} thing`, thing);
        this.showProfile = !!profile;
      }
    );
  }

}

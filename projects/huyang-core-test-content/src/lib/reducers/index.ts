import {Action, ActionReducerMap, createAction, createReducer, MetaReducer, on, props} from '@ngrx/store';
import {EndorState} from '../../../../huyang-endor/src/lib/reducers';


export const huyangCoreTestContentStateFeatureKey = 'huyangCoreTestContentState';

export interface SidenavItem {
  label: string;
  url: string;
}

export interface TestContentState {
  sidenavList: Array<SidenavItem>;

}

export const testContentAddToSidenavListAction = createAction(
  '[TestContent Sidenav] Add Item',
  props<SidenavItem>()
);

const testContentSidenavListReducerFunction = (state: TestContentState, thing: SidenavItem) => {
  // console.log(`${testContentSidenavListReducerFunction.name} state`, state);
  // console.log(`${testContentSidenavListReducerFunction.name} thing`, thing);
  const nState: TestContentState = {...state};
  if (!nState.sidenavList) {
    nState.sidenavList = [];
  }
  nState.sidenavList.push(thing);
  return nState;
  // return state;
};

const testContentSidenavListReducer = createReducer(
  {} as TestContentState,
  on(testContentAddToSidenavListAction, testContentSidenavListReducerFunction)
);

export function testContentReducer(state: TestContentState | undefined, action: Action) {
  return testContentSidenavListReducer(state, action);
}

// export const huyangCoreTestContentReducers: ActionReducerMap<TestContentState> = {
//   sidenavList: testContentSidenavListReducer
// };
//
//
// export const metaReducers: MetaReducer<TestContentState>[] = [];

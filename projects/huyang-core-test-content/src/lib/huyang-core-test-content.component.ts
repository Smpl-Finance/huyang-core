import {Component, OnInit} from '@angular/core';
import {testContentAddToSidenavListAction, TestContentState} from './reducers';
import {Store} from '@ngrx/store';

@Component({
  selector: 'lib-huyang-core-test-content',
  template: `
      <div>
          lvl 2
          <button (click)="addMenuItem()">Add</button>
      </div>
      <div>
          {{message}}
      </div>
  `,
  styles: []
})
export class HuyangCoreTestContentComponent implements OnInit {
  message: any;
  private counter = 0;

  constructor(private store: Store<TestContentState>) {
  }

  ngOnInit() {
  }

  addMenuItem() {
    // console.log('adding item');
    this.store.dispatch(
      testContentAddToSidenavListAction(
        {
          label: 'cool thing' + this.counter,
          url: 'http://news.com'
        }
      )
    );
    this.counter++;
  }
}

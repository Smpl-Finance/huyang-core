import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {endorSidenavProfileAction, EndorState} from './reducers';

// import * as d3 from 'd3';

const data = [
  {id: '1', description: 'Luci', firstName: 'Yoda', lastName: 'Johnson', imgUrl: 'assets/yoda-avatar.png'},
  {
    id: '2',
    description: 'billy',
    firstName: 'Billy',
    lastName: 'Johnson',
    imgUrl: 'assets/chewy-avatar.png',
    parent: '1'
  },
  {
    id: '3',
    description: 'harry',
    firstName: 'harry',
    lastName: 'Johnson',
    imgUrl: 'assets/vader-avatar.png',
    parent: '1'
  },
  {id: '4', description: 'joy', firstName: 'Joy', lastName: 'Johnson', imgUrl: 'assets/morty-avatar.jpeg', parent: '2'},
  {
    id: '5',
    description: 'larry',
    firstName: 'Larry',
    lastName: 'Johnson',
    imgUrl: 'assets/trooper-avatar.png',
    parent: '2'
  },
  {
    id: '6',
    description: 'holly',
    firstName: 'Holly',
    lastName: 'Johnson',
    imgUrl: 'assets/bb8-avatar.jpg',
    parent: '3'
  },
  {id: '7', description: 'Joe', firstName: 'Joe', lastName: 'Johnson', imgUrl: 'assets/yoda-avatar.png', parent: '3'},
  {id: '8', description: 'barb', firstName: 'Barb', lastName: 'Johnson', imgUrl: 'assets/yoda-avatar.png', parent: '4'},
  {id: '9', description: 'tom', firstName: 'Tom', lastName: 'Johnson', imgUrl: 'assets/yoda-avatar.png', parent: '4'},
  {
    id: '10',
    description: 'jacob',
    firstName: 'Jacob',
    lastName: 'Johnson',
    imgUrl: 'assets/linuxjedi-avatar.png',
    parent: '5'
  },
  {
    id: '11',
    description: 'sang',
    firstName: 'Sang',
    lastName: 'Johnson',
    imgUrl: 'assets/yoda-avatar.png',
    parent: '5'
  },
  {
    id: '12',
    description: 'daniel',
    firstName: 'Daniel',
    lastName: 'Johnson',
    imgUrl: 'assets/yoda-avatar.png',
    parent: '6'
  },
  {
    id: '13',
    description: 'mark',
    firstName: 'Mark',
    lastName: 'Johnson',
    imgUrl: 'assets/yoda-avatar.png',
    parent: '6'
  },
  {
    id: '14',
    description: 'justin',
    firstName: 'Justin',
    lastName: 'Johnson',
    imgUrl: 'assets/yoda-avatar.png',
    parent: '7'
  },
  {
    id: '15',
    description: 'abby',
    firstName: 'Abby',
    lastName: 'Johnson',
    imgUrl: 'assets/yoda-avatar.png',
    parent: '7'
  },
  {
    id: '16',
    description: 'lance',
    firstName: 'Lance',
    lastName: 'Johnson',
    imgUrl: 'assets/yoda-avatar.png',
    parent: '8'
  },
  {
    id: '17',
    description: 'keith',
    firstName: 'Keith',
    lastName: 'Johnson',
    imgUrl: 'assets/yoda-avatar.png',
    parent: '8'
  },
];

@Component({
  selector: 'lib-huyang-endor',
  templateUrl: 'huyang-endor.component.html',
  styles: []
})
export class HuyangEndorComponent implements OnInit {
  @ViewChild('tree', {static: true})
  private chartContainer: ElementRef;

  data: any;

  message: string;
  private c = 0;

  constructor(private store: Store<EndorState>) {
    this.data = data;
  }

  ngOnInit() {
  }

  nodeUpdated($event) {
  }

  nodeSelected($event) {
    const item = $event.data;
    this.store.dispatch(
      endorSidenavProfileAction(
        {
          currentAccount: {
            firstName: item.firstName, lastName: item.lastName, url: item.imgUrl
          }
        }
      )
    );
  }
}

import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {faArrowLeft, faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'header-left',
  templateUrl: './huyang-header-left.component.html',
  styleUrls: ['./huyang-header-left.component.scss']
})
export class HuyangHeaderLeftComponent implements OnChanges {
  @Input() title = 'Application Title';
  @Input() logoImage = '';
  @Input() leftNavOpen = true;
  @Output() leftNavCollapse: EventEmitter<boolean> = new EventEmitter<boolean>();
  leftNavCollapseIcon = this.leftNavOpen ? faArrowLeft : faBars;
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.leftNavCollapseIcon = changes.leftNavOpen.currentValue
      ? faArrowLeft
      : faBars;
  }

  collapseLeftMenu() {
    this.leftNavCollapse.emit(this.leftNavOpen);
  }
}

import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import {LeftNavMenuItem} from '../../../models/leftnav/leftnav-menu-item.interface';
import {faHistory, faSitemap, IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leftnav-header',
  templateUrl: './huyang-left-nav-header.component.html',
  styleUrls: ['./huyang-left-nav-header.component.scss']
})
export class HuyangLeftNavHeaderComponent implements OnChanges {
  @Input() openFeature = '';
  @Input() links: LeftNavMenuItem[] = [];
  @Output() changeFeature: EventEmitter<string> = new EventEmitter<string>();
  featureIcon: IconDefinition = faSitemap;
  headerLinks: LeftNavMenuItem[] = [];
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.featureIcon =
      changes.openFeature.currentValue === 'history'
        ? faSitemap
        : faHistory;
    // this.headerLinks = changes.openFeature.currentValue;
  }

  toggleFeature(feature) {
    if (feature === 'history') {
      this.changeFeature.emit('module');
    } else {
      this.changeFeature.emit('history');
    }
  }
}

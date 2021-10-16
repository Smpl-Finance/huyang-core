import { Component, Input } from '@angular/core';
import {HuyangHeaderLinkModel} from '../../../models/huyang-header/huyang-header-link.model';
import {HuyangUserAccountModel} from '../../../models/huyang-user-account.model';
import {faCog, faLock, faLockOpen} from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'header-right',
  templateUrl: './huyang-header-right.component.html',
  styleUrls: ['./huyang-header-right.component.scss']
})
export class HuyangHeaderRightComponent {
  @Input() links: HuyangHeaderLinkModel[] = [];
  @Input() user: HuyangUserAccountModel = null;
  loginLogoutIcon = this.user ? faLock : faLockOpen;
  settingsIcon = faCog;
  constructor() {}
}

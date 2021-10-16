import {Component, Injector, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {HeaderFacade} from './+state/huyang-header/header.facade';
import {LeftnavFacade} from './+state/leftnav/leftnav.facade';
import {HuyangHeaderInitModel} from './models/huyang-header/huyang-header-init.model';
import {LeftNavMenuItem} from './models/leftnav/leftnav-menu-item.interface';
import {CoreFacade} from './+state/core/core.facade';
import {filter} from 'rxjs/operators';
import {defaultHeaderObj} from './default-header-init';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'huyang-core',
  templateUrl: 'huyang-core.component.html',
  styleUrls: ['huyang-core.component.scss']
})
export class HuyangCoreComponent implements OnInit, OnDestroy {

  @Input() headerObj: HuyangHeaderInitModel = defaultHeaderObj;
  @Input() leftNavHeaderLinks: LeftNavMenuItem[] = [];
  leftNavOpen$: Observable<boolean> = this.leftNavFacade
    .leftnavOpenClosedState$;
  subs: Subscription[] = [];

  constructor(
    private store: Store<any>,
    private injector: Injector,
    private coreFacade: CoreFacade,
    private leftNavFacade: LeftnavFacade,
    private headerFacade: HeaderFacade
  ) {
  }

  ngOnInit() {
    this.findAndInitModules();

    const cf = this.coreFacade.coreLoaded$
      .pipe(filter(open => open !== null))
      .subscribe(open => {
        if (!open) {
          this.coreFacade.coreLoad();
        }
      });
    console.log('headerLoaded?');
    this.headerFacade.headerLoaded$
      .subscribe(
        t => console.log('in headerLoaded subscription t', t)
      );
    const hf = this.headerFacade.headerLoaded$
      .pipe(filter(open => open !== null))
      .subscribe(open => {
        console.log('headerLoaded', open);
        if (!open) {
          if (Object.keys(this.headerObj).length > 0) {
            this.headerFacade.headerLoad(this.headerObj);
          } else {
            throw new Error('Header has not been initialized!');
          }
        }
      });
    const lnf = this.leftNavFacade.leftnavLoaded$
      .pipe(filter(open => open !== null))
      .subscribe(open => {
        if (!open) {
          if (this.leftNavHeaderLinks.length > 0) {
            this.leftNavFacade.leftnavLoad(this.leftNavHeaderLinks);
          } else {
            this.leftNavFacade.leftnavLoad();
          }
        }
      });
    this.subs.push(cf, hf, lnf);
  }

  private findAndInitModules() {
    const startView = (this.injector as any).view;
    if (!startView || !startView.root || !startView.root.ngModule || !startView.root.ngModule._providers) {
      throw new Error('Can not find providers!');
    }
    const providers = startView.root.ngModule._providers;

    providers.forEach(
      (provider) => {
        if (!provider) {
          return;
        }
        if (provider.huyangModuleInit) {
          console.log('yay, found huyang module', provider);
          provider.huyangModuleInit();
        }
      }
    );
  }

  toggleLeftNav(event) {
    if (event) {
      this.leftNavFacade.leftnavClose();
    } else {
      this.leftNavFacade.leftnavOpen();
    }
  }

  ngOnDestroy() {
    this.subs.forEach(subscription => subscription.unsubscribe());
  }
}


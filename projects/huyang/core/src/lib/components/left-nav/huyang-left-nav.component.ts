import {
  Component,
  OnDestroy,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import {LeftnavFeature} from '../../models/leftnav/leftnav-feature.enum';
import {LeftNavMenuItem} from '../../models/leftnav/leftnav-menu-item.interface';
import {LeftnavFacade} from '../../+state/leftnav/leftnav.facade';
import {HuyangHeaderService} from '../../services/huyang-header/huyang-header.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'leftnav-main',
  templateUrl: './huyang-left-nav.component.html',
  styleUrls: ['./huyang-left-nav.component.scss']
})
export class HuyangLeftNavComponent implements OnChanges, OnDestroy {
  @Input() leftNavOpen = true;
  private leftNavOpenBehaviorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.leftNavOpen
  );
  showLeftNav$: Observable<boolean> = this.leftNavOpenBehaviorSubject.asObservable();
  showFeature$: Observable<LeftnavFeature> = this.leftNavFacade
    .leftnavOpenFeature$;
  headerLinks$: Observable<LeftNavMenuItem[]> = this.leftNavFacade
    .leftnavHeaderLinks$;
  subs: Subscription[] = [];
  constructor(
    private headerService: HuyangHeaderService,
    private leftNavFacade: LeftnavFacade,
    private sanitizer: DomSanitizer
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    this.leftNavOpenBehaviorSubject.next(changes.leftNavOpen.currentValue);
  }

  getStyles() {
    let styles = {};
    const gs = this.headerService.headerHeight$
      .pipe(distinctUntilChanged())
      .subscribe(height => {
        styles = {
          height: 'calc(100vh - ' + height + 'px',
          top: height + 'px'
        };
      });
    this.subs.push(gs);
    // return this.sanitizer.bypassSecurityTrustStyle(JSON.stringify(styles));
    return styles;
  }

  toggleFeature(event) {
    if (event === 'history') {
      this.leftNavFacade.leftnavSetHistoryFeature();
    } else {
      this.leftNavFacade.leftnavSetModuleFeature();
    }
  }

  ngOnDestroy() {
    this.subs.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}

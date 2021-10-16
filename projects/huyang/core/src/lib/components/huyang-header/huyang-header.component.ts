import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import {HuyangHeaderSearchParamModel} from '../../models/huyang-header/huyang-header-search-param.model';
import {HuyangHeaderLinkModel} from '../../models/huyang-header/huyang-header-link.model';
import {HuyangUserAccountModel} from '../../models/huyang-user-account.model';
import {HeaderFacade} from '../../+state/huyang-header/header.facade';
import {HuyangHeaderService} from '../../services/huyang-header/huyang-header.service';
import {HeaderSearch} from '../../services/huyang-header/header-search';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'header-main',
  templateUrl: './huyang-header.component.html',
  styleUrls: ['./huyang-header.component.scss']
})
export class HuyangHeaderComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @ViewChild('navbar', { static: true }) nav!: ElementRef;
  @Input() leftnavOpen = true;
  @Output() leftnavOpenCallback: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  title$: Observable<string> = this.headerFacade.headerTitle$;
  logo$: Observable<string> = this.headerFacade.headerLogo$;
  searchParams$: Observable<HuyangHeaderSearchParamModel[]> = this.headerFacade
    .headerSearchParams$;
  links$: Observable<HuyangHeaderLinkModel[]> = this.headerFacade.headerLinks$;
  user$: Observable<HuyangUserAccountModel> = this.headerFacade.headerUserAccount$;
  mobileMenuOpen$: Observable<boolean> = this.headerFacade
    .headerMobileMenuState$;
  leftnavOpenBehaviorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.leftnavOpen
  );
  leftnavOpen$: Observable<boolean> = this.leftnavOpenBehaviorSubject.asObservable();
  mobileMenu = true;
  // This collapses or expands the main menu on smaller mobile screens, this will be managed by top menu
  searchCollapseIcon = 'fa-ellipsis-v';
  subs: Subscription[] = [];
  previousHeaderHeight: number;
  @HostListener('window:resize', ['$event']) onResize(event) {
    if (this.nav.nativeElement.offsetHeight !== this.previousHeaderHeight) {
      this.headerService.setHeaderHeight(this.nav.nativeElement.offsetHeight);
      this.previousHeaderHeight = this.nav.nativeElement.offsetHeight;
    }
  }

  constructor(
    private headerFacade: HeaderFacade,
    private headerService: HuyangHeaderService
  ) {}

  ngOnInit() {
    const hl = this.headerFacade.headerLoaded$
      .pipe(distinctUntilChanged())
      .subscribe(loaded => {
        if (!loaded) {
          throw new Error(
            'Header has not been initialized!  Please initialize header!'
          );
        }
      });
    const hmm = this.headerFacade.headerMobileMenuState$
      .pipe(distinctUntilChanged())
      .subscribe(open => {
        setTimeout(() => {
          if (
            this.nav.nativeElement.offsetHeight !== this.previousHeaderHeight
          ) {
            this.headerService.setHeaderHeight(
              this.nav.nativeElement.offsetHeight
            );
            this.previousHeaderHeight = this.nav.nativeElement.offsetHeight;
          }
        }, 5);
      });
    this.subs.push(hl, hmm);
  }

  ngAfterViewInit() {
    this.headerService.setHeaderHeight(this.nav.nativeElement.offsetHeight);
    this.previousHeaderHeight = this.nav.nativeElement.offsetHeight;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.leftnavOpenBehaviorSubject.next(changes.leftnavOpen.currentValue);
  }

  toggleMobileMenu(open) {
    if (open) {
      this.headerFacade.headerCloseMobileMenu();
    } else {
      this.headerFacade.headerOpenMobileMenu();
    }
  }

  toggleLeftnav(event) {
    this.leftnavOpenCallback.emit(event);
  }

  headerSearch(search: HeaderSearch) {
    console.log(search);
  }

  ngOnDestroy() {
    this.subs.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}

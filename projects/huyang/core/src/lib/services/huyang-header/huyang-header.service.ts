import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HuyangHeaderService {
  headerHeight: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  headerHeight$: Observable<number> = this.headerHeight.asObservable();
  constructor() {}

  setHeaderHeight(height: number) {
    this.headerHeight.next(height);
  }
}

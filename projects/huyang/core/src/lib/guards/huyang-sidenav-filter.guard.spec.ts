import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { HuyangSidenavFilterGuard } from './huyang-sidenav-filter.guard';

describe('HuyangSidenavFilterGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HuyangSidenavFilterGuard]
    });
  });

  it('should ...', inject([HuyangSidenavFilterGuard], (guard: HuyangSidenavFilterGuard) => {
    expect(guard).toBeTruthy();
  }));
});

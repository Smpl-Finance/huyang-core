import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { HuyangAuthGuard } from './huyang-auth.guard';

describe('HuyangAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HuyangAuthGuard]
    });
  });

  it('should ...', inject([HuyangAuthGuard], (guard: HuyangAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});

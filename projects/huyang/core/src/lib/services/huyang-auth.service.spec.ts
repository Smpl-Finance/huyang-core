import { TestBed } from '@angular/core/testing';

import { HuyangAuthService } from './huyang-auth.service';

describe('HuyangAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HuyangAuthService = TestBed.get(HuyangAuthService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HuyangEndorService } from './huyang-endor.service';

describe('HuyangEndorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HuyangEndorService = TestBed.get(HuyangEndorService);
    expect(service).toBeTruthy();
  });
});

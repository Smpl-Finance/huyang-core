import { TestBed } from '@angular/core/testing';

import { HuyangCoreTestContentService } from './huyang-core-test-content.service';

describe('HuyangCoreTestContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HuyangCoreTestContentService = TestBed.get(HuyangCoreTestContentService);
    expect(service).toBeTruthy();
  });
});

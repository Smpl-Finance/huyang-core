import { TestBed } from '@angular/core/testing';

import { HuyangModuleManagerService } from './huyang-module-manager.service';

describe('HuyangModuleManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HuyangModuleManagerService = TestBed.get(HuyangModuleManagerService);
    expect(service).toBeTruthy();
  });
});

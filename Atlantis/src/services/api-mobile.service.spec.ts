import { TestBed } from '@angular/core/testing';

import { ApiMobileService } from './api-mobile.service';

describe('ApiMobileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiMobileService = TestBed.get(ApiMobileService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CheckauthService } from './checkauth.service';

describe('CheckauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckauthService = TestBed.get(CheckauthService);
    expect(service).toBeTruthy();
  });
});

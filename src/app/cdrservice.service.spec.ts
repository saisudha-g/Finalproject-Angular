import { TestBed } from '@angular/core/testing';

import { CdrserviceService } from './cdrservice.service';

describe('CdrserviceService', () => {
  let service: CdrserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdrserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

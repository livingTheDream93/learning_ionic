import { TestBed } from '@angular/core/testing';

import { ReceipiesServiceService } from './receipies-service.service';

describe('ReceipiesServiceService', () => {
  let service: ReceipiesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceipiesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

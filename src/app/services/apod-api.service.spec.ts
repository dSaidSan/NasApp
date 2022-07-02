import { TestBed } from '@angular/core/testing';

import { ApodApiService } from './apod-api.service';

describe('ApodApiService', () => {
  let service: ApodApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApodApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

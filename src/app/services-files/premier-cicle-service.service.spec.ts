import { TestBed } from '@angular/core/testing';

import { PremierCicleServiceService } from './premier-cicle-service.service';

describe('PremierCicleServiceService', () => {
  let service: PremierCicleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremierCicleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

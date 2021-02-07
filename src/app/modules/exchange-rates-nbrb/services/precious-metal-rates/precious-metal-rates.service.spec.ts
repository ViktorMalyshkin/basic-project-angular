import { TestBed } from '@angular/core/testing';

import { PreciousMetalRatesService } from './precious-metal-rates.service';

describe('PreciousMetalRatesService', () => {
  let service: PreciousMetalRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreciousMetalRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ExchangeRatesNbrbService } from './exchange-rates-nbrb.service';

describe('ExchangeRatesNbrbService', () => {
  let service: ExchangeRatesNbrbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeRatesNbrbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

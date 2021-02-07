import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ExchangeRatesNbrbEffects } from './exchange-rates-nbrb.effects';

describe('ExchangeRatesNbrbEffects', () => {
  let actions$: Observable<any>;
  let effects: ExchangeRatesNbrbEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExchangeRatesNbrbEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ExchangeRatesNbrbEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

import * as fromExchangeRatesNbrb from '../reducers/exchange-rates-nbrb.reducer';
import { selectExchangeRatesNbrbState } from './exchange-rates-nbrb.selectors';

describe('ExchangeRatesNbrb Selectors', () => {
  it('should select the feature state', () => {
    const result = selectExchangeRatesNbrbState({
      [fromExchangeRatesNbrb.exchangeRatesNbrbFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});

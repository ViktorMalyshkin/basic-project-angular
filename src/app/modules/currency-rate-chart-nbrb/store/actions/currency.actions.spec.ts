import * as CurrencyActions from './currency.actions';

describe('Currency', () => {
  it('should create an instance', () => {
    expect(new CurrencyActions.LoadCurrencys()).toBeTruthy();
  });
});

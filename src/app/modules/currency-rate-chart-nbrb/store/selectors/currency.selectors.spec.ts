import * as fromCurrency from '../reducers/currency.reducer'
import { selectCurrencyState } from './currency.selectors'

describe('Currency Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCurrencyState({
      [ fromCurrency.CURRENCIES_FEATURE_KEY ]: {},
    })

    expect(result).toEqual({})
  })
})

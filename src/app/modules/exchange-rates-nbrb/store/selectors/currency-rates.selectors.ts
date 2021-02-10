import { createSelector } from '@ngrx/store'
import { IExchangeRatesNbrbState } from '../state'
import { CURRENCY_RATES_FEATURE_KEY, ICurrencyRatesState } from '../state/currency-rates.state'
// import * as fromCurrencyRates from '../state/currency-rates.state'
// import { IPreciousMetalRatesState, PRECIOUS_METAL_RATES_FEATURE_KEY } from '../state/precious-metal-rates.state'


// Почему это не сработало????
// export const selectCurrencyRates = createFeatureSelector<fromCurrencyRates.ICurrencyRatesState>(
//   fromCurrencyRates.CURRENCY_RATES_FEATURE_KEY,
// )

const selectCurrencyRates = ( state: IExchangeRatesNbrbState ) => state[ CURRENCY_RATES_FEATURE_KEY ]

export const selectCurrencyRateList = createSelector(selectCurrencyRates,
  ( state: ICurrencyRatesState ) => state.rates)

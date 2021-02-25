import { RateModel } from '../../models/rate.model'

export const CURRENCY_RATES_FEATURE_KEY = 'CURRENCY_RATES_FEATURE_KEY'

export interface ICurrencyRatesState {
  rates: RateModel[]
}

export const initialCurrencyRatesState: ICurrencyRatesState = {
  rates: [],
}



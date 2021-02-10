import { IRate } from '../../models/rate.model'

export const CURRENCY_RATES_FEATURE_KEY = 'CURRENCY_RATES_FEATURE_KEY'

export interface ICurrencyRatesState {
  rates: IRate[]
}

export const initialCurrencyRatesState: ICurrencyRatesState = {
  rates: [],
}



import { IRate } from '../../models/rate.model'

export const currencyRatesFeatureKey = 'currencyRates'

export interface ICurrencyRatesState {
  rates: IRate[]
}

export const initialCurrencyRatesState: ICurrencyRatesState = {
  rates: [],
}



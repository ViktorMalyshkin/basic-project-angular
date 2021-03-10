import { CurrencyModel } from './currency.model'
import { DynamicsModel } from './dynamics.model'

export interface DynamicsCurrencyModel {
  dynamics: DynamicsModel[]
  currencies: CurrencyModel[]
}

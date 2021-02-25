import {PriceModel} from '../../models/price.model'

export const PRECIOUS_METAL_RATES_FEATURE_KEY = 'PRECIOUS_METAL_RATES_FEATURE_KEY'

export interface IPreciousMetalRatesState {
  ingots: PriceModel[]
}

export const initialPreciousMetalRatesState: IPreciousMetalRatesState = {
  ingots: [],
}

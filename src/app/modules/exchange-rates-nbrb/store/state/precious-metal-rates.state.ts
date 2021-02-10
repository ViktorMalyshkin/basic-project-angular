import { IIngot } from '../../models/ingot.model'

export const PRECIOUS_METAL_RATES_FEATURE_KEY = 'PRECIOUS_METAL_RATES_FEATURE_KEY'

export interface IPreciousMetalRatesState {
  ingots: IIngot[]
}

export const initialPreciousMetalRatesState: IPreciousMetalRatesState = {
  ingots: [],
}

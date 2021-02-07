import { IIngot } from '../../models/ingot.model'

export const preciousMetalRatesFeatureKey = 'preciousMetalRates'

export interface IPreciousMetalRatesState {
  ingots: IIngot[]
}

export const initialPreciousMetalRatesState: IPreciousMetalRatesState = {
  ingots: [],
}

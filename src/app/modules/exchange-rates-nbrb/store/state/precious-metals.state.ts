import { IMetal } from '../../models/metal.model'

export const preciousMetalsFeatureKey = 'preciousMetals'

export interface IPreciousMetalsState {
  metals: IMetal[]
}

export const initialPreciousMetalsState: IPreciousMetalsState = {
  metals: [],
}

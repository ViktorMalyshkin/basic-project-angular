import {MetalModel} from '../../models/metal.model'

export const PRECIOUS_METALS_FEATURE_KEY = 'PRECIOUS_METALS_FEATURE_KEY'

export interface IPreciousMetalsState {
  metals: MetalModel[]
}

export const initialPreciousMetalsState: IPreciousMetalsState = {
  metals: [],
}

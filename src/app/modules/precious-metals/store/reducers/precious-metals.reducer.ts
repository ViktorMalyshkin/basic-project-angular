
import { PreciousMetalsActions, PreciousMetalsActionTypes } from '../actions/precious-metals.actions';

export const preciousMetalsFeatureKey = 'preciousMetals';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: PreciousMetalsActions): State {
  switch (action.type) {

    case PreciousMetalsActionTypes.LoadPreciousMetalss:
      return state;

    default:
      return state;
  }
}

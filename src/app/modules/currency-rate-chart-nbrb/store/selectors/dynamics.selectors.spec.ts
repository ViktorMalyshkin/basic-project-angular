import { ExpectedConditions } from 'protractor'
import * as fromDynamics from '../reducers/dynamics.reducer'
import { IDynamicsState } from '../reducers/dynamics.reducer'
import { selectDynamicsState } from './dynamics.selectors'

describe('Dynamics Selectors', () => {
  it('should select the feature state', () => {
    const result = selectDynamicsState({
      [ fromDynamics.DYNAMICS_FEATURE_KEY ]: {},
    })

    expect(result).toEqual({ dynamics })
  })
})



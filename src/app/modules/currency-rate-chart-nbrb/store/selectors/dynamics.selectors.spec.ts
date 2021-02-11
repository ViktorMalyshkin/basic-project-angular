import * as fromDynamics from '../reducers/dynamics.reducer';
import { selectDynamicsState } from './dynamics.selectors';

describe('Dynamics Selectors', () => {
  it('should select the feature state', () => {
    const result = selectDynamicsState({
      [fromDynamics.dynamicsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});

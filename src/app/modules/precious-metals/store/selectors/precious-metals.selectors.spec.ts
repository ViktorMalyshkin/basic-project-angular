import * as fromPreciousMetals from '../reducers/precious-metals.reducer';
import { selectPreciousMetalsState } from './precious-metals.selectors';

describe('PreciousMetals Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPreciousMetalsState({
      [fromPreciousMetals.preciousMetalsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});

import { reducer, initialDynamicsState } from './dynamics.reducer';

describe('Dynamics Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialDynamicsState, action);

      expect(result).toBe(initialDynamicsState);
    });
  });
});

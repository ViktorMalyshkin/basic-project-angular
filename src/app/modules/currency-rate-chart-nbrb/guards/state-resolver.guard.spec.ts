import { TestBed } from '@angular/core/testing';

import { StateResolverGuard } from './state-resolver.guard';

describe('StateResolverGuard', () => {
  let guard: StateResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StateResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

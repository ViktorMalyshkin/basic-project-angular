import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DynamicsEffects } from './dynamics.effects';

describe('DynamicsEffects', () => {
  let actions$: Observable<any>;
  let effects: DynamicsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DynamicsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(DynamicsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

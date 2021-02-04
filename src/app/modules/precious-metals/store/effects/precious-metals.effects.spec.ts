import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PreciousMetalsEffects } from './precious-metals.effects';

describe('PreciousMetalsEffects', () => {
  let actions$: Observable<any>;
  let effects: PreciousMetalsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PreciousMetalsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PreciousMetalsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

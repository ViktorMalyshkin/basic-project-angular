import { TestBed } from '@angular/core/testing';

import { PreciousMetalsService } from './precious-metals.service';

describe('PreciousMetalsService', () => {
  let service: PreciousMetalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreciousMetalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

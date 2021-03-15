import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElCurrencyComponent } from './el-currency.component';

describe('ElCurrencyComponent', () => {
  let component: ElCurrencyComponent;
  let fixture: ComponentFixture<ElCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

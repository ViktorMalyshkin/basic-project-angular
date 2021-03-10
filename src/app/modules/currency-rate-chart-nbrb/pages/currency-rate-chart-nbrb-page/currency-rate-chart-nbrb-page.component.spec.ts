import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyRateChartNbrbPageComponent } from './currency-rate-chart-nbrb-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('CurrencyRateChartNbrbPageComponent', () => {
  let component: CurrencyRateChartNbrbPageComponent;
  let fixture: ComponentFixture<CurrencyRateChartNbrbPageComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ CurrencyRateChartNbrbPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyRateChartNbrbPageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

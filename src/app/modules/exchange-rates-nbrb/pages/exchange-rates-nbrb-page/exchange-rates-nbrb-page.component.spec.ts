import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRatesNbrbPageComponent } from './exchange-rates-nbrb-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ExchangeRatesNbrbPageComponent', () => {
  let component: ExchangeRatesNbrbPageComponent;
  let fixture: ComponentFixture<ExchangeRatesNbrbPageComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ExchangeRatesNbrbPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRatesNbrbPageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

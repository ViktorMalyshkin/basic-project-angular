import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { ConverterPageComponent } from './page/converter-page/converter-page.component';
import { CurrencyRatesEffects } from './store/effects/currency-rates/currency-rates.effects'
import { CURRENCY_RATES_FEATURE_KEY, currencyRatesReducers } from './store/reducers/currency-rates/currency-rates.reducer'



@NgModule({
  declarations: [ConverterPageComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(CURRENCY_RATES_FEATURE_KEY, currencyRatesReducers),
    EffectsModule.forFeature([CurrencyRatesEffects]),
  ]
})
export class ConverterNbrbModule { }

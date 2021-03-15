import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { ConverterComponent } from './components/converter/converter.component'
import { ConverterPageComponent } from './page/converter-page/converter-page.component'
import { CurrencyRatesEffects } from './store/effects/currency-rates/currency-rates.effects'
import { CURRENCY_RATES_FEATURE_KEY, currencyRatesReducers } from './store/reducers/currency-rates/currency-rates.reducer'


@NgModule({
  declarations: [ConverterPageComponent, ConverterComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(CURRENCY_RATES_FEATURE_KEY, currencyRatesReducers),
    EffectsModule.forFeature([CurrencyRatesEffects]),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
})
export class ConverterNbrbModule {}

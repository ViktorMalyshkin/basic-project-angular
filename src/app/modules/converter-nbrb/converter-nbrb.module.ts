import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatOptionModule } from '@angular/material/core'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu'
import { MatSelectModule } from '@angular/material/select'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { ConverterComponent } from './components/converter/converter.component'
import { ConverterPageComponent } from './page/converter-page/converter-page.component'
import { CurrencyRatesEffects } from './store/effects/currency-rates/currency-rates.effects'
import { CURRENCY_RATES_FEATURE_KEY, currencyRatesReducers } from './store/reducers/currency-rates/currency-rates.reducer';
import { ElCurrencyComponent } from './elements/el-currency/el-currency.component'


@NgModule({
  declarations: [ConverterPageComponent, ConverterComponent, ElCurrencyComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(CURRENCY_RATES_FEATURE_KEY, currencyRatesReducers),
    EffectsModule.forFeature([CurrencyRatesEffects]),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatMenuModule,
  ],
})
export class ConverterNbrbModule {}

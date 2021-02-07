import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { ExchangeRatesNbrbEffects } from './store/effects/exchange-rates-nbrb.effects'
import * as fromExchangeRatesNbrb from './store/reducers/exchange-rates-nbrb.reducer'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromExchangeRatesNbrb.exchangeRatesNbrbFeatureKey, fromExchangeRatesNbrb.reducer),
    EffectsModule.forFeature([ExchangeRatesNbrbEffects]),
  ],
})

export class ExchangeRatesNbrbModule {}

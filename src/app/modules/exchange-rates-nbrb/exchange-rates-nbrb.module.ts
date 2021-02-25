import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {MatTableModule} from '@angular/material/table'
import {RouterModule} from '@angular/router'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {CurrencyRatesComponent} from './components/currency-rates/currency-rates.component'
import {PreciousMetalRatesComponent} from './components/precious-metal-rates/precious-metal-rates.component'
import {ElTableComponent} from '../../elements/el-table/el-table.component'
import {ExchangeRatesNbrbPageComponent} from './pages/exchange-rates-nbrb-page/exchange-rates-nbrb-page.component'
import {exchangeRatesNbrbRoutes} from './routes/exchange-rates-nbrb.routes'
import {CurrencyRatesEffects} from './store/effects/currency-rates/currency-rates.effects'
import {PreciousMetalRatesEffects} from './store/effects/precious-metal-rates/precious-metal-rates.effects'
import {PreciousMetalsEffects} from './store/effects/precious-metals/precious-metals.effects'
import {EXCHANGE_RATES_NBRB_REDUCER_NODES, exchangeRatesNbrbReducers} from './store/reducers'
import {currencyRatesReducers} from './store/reducers/currency-rates/currency-rates.reducer'
import {preciousMetalRatesReducers} from './store/reducers/precious-metal-rates/precious-metal-rates.reducer'
import {preciousMetalsReducers} from './store/reducers/precious-metals/precious-metals.reducer'
import {CURRENCY_RATES_FEATURE_KEY} from './store/state/currency-rates.state'
import {PRECIOUS_METAL_RATES_FEATURE_KEY} from './store/state/precious-metal-rates.state'
import {PRECIOUS_METALS_FEATURE_KEY} from './store/state/precious-metals.state'

@NgModule({
  declarations: [ExchangeRatesNbrbPageComponent, CurrencyRatesComponent, PreciousMetalRatesComponent, ElTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    StoreModule.forFeature(EXCHANGE_RATES_NBRB_REDUCER_NODES, exchangeRatesNbrbReducers),
    StoreModule.forFeature(PRECIOUS_METALS_FEATURE_KEY, preciousMetalsReducers),
    StoreModule.forFeature(PRECIOUS_METAL_RATES_FEATURE_KEY, preciousMetalRatesReducers),
    StoreModule.forFeature(CURRENCY_RATES_FEATURE_KEY, currencyRatesReducers),
    EffectsModule.forFeature([PreciousMetalsEffects, PreciousMetalRatesEffects, CurrencyRatesEffects]),
    RouterModule.forChild(exchangeRatesNbrbRoutes),
  ],
})

export class ExchangeRatesNbrbModule {
}

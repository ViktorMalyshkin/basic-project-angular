import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatTableModule } from '@angular/material/table'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { ExchangeRatesNbrbPageComponent } from './pages/exchange-rates-nbrb-page/exchange-rates-nbrb-page.component'
import { exchangeRatesNbrbRoutes } from './routes/exchange-rates-nbrb.routes'
import { CurrencyRatesEffects } from './store/effects/currency-rates/currency-rates.effects'
import { PreciousMetalRatesEffects } from './store/effects/precious-metal-rates/precious-metal-rates.effects'
import { PreciousMetalsEffects } from './store/effects/precious-metals/precious-metals.effects'
import { EXCHANGE_RATES_NBRB_REDUCER_NODES, exchangeRatesNbrbReducers } from './store/reducers';
import { CurrencyRatesComponent } from './components/currency-rates/currency-rates.component';
import { PreciousMetalRatesComponent } from './components/precious-metal-rates/precious-metal-rates.component';
import { ElTableComponent } from './elements/el-table/el-table.component'

@NgModule({
  declarations: [ExchangeRatesNbrbPageComponent, CurrencyRatesComponent, PreciousMetalRatesComponent, ElTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    StoreModule.forFeature(EXCHANGE_RATES_NBRB_REDUCER_NODES, exchangeRatesNbrbReducers),
    EffectsModule.forFeature([PreciousMetalsEffects, PreciousMetalRatesEffects, CurrencyRatesEffects]),
    RouterModule.forChild(exchangeRatesNbrbRoutes),
  ],
})

export class ExchangeRatesNbrbModule {}

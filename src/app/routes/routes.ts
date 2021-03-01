import { Routes } from '@angular/router'
import { CurrencyRateChartNbrbPageComponent } from '../modules/currency-rate-chart-nbrb/pages/currency-rate-chart-nbrb-page/currency-rate-chart-nbrb-page.component'
import { ExchangeRatesNbrbPageComponent } from '../modules/exchange-rates-nbrb/pages/exchange-rates-nbrb-page/exchange-rates-nbrb-page.component'

export const routes: Routes = [
  { path: 'nbrb', component: ExchangeRatesNbrbPageComponent },
  { path: 'chart', component: CurrencyRateChartNbrbPageComponent },
  { path: '**', redirectTo: '' }
]

import { Route } from '@angular/router'
import { CurrencyRateChartNbrbPageComponent } from '../pages/currency-rate-chart-nbrb-page/currency-rate-chart-nbrb-page.component'

export const exchangeRatesNbrbRoutes: Route[] = [
  {
    path: '',
    component: CurrencyRateChartNbrbPageComponent,
  },
]

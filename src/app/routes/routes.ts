import { Routes } from '@angular/router'
import { ExchangeRatesNbrbPageComponent } from '../modules/exchange-rates-nbrb/pages/exchange-rates-nbrb-page/exchange-rates-nbrb-page.component'
import { ChartNbrbPageStubComponent } from '../pages/chart-nbrb-page-stub/chart-nbrb-page-stub.component'

export const routes: Routes = [
  { path: 'nbrb', component: ExchangeRatesNbrbPageComponent },
  { path: 'chart', component: ChartNbrbPageStubComponent },
  { path: '**', redirectTo: '' },
]

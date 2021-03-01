import { Routes } from '@angular/router'
import { ExchangeRatesNbrbPageComponent } from '../modules/exchange-rates-nbrb/pages/exchange-rates-nbrb-page/exchange-rates-nbrb-page.component'

export const routes: Routes = [
  { path: 'nbrb', component: ExchangeRatesNbrbPageComponent },
  { path: '**', redirectTo: '' }
]

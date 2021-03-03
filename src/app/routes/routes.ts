import { Routes } from '@angular/router'
import { ExchangeRatesNbrbPageComponent } from '../modules/exchange-rates-nbrb/pages/exchange-rates-nbrb-page/exchange-rates-nbrb-page.component'
import { NbrbPageComponent } from '../pages/nbrb-page/nbrb-page.component'
import { StubComponent } from '../pages/stub/stub.component'

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: StubComponent },
  { path: 'about', component: StubComponent },
  { path: 'exrates-banks', component: StubComponent },
  { path: 'smart-calc', component: StubComponent },
  {
    path: 'nbrb', component: NbrbPageComponent,
    children: [
      { path: 'exrates-nbrb', component: ExchangeRatesNbrbPageComponent },
      { path: 'chart', component: StubComponent },
      { path: 'converter', component: StubComponent },
    ],
  },
  { path: '**', redirectTo: '/dashboard' },
]

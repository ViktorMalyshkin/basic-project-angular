import { DatePipe } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EffectsModule } from '@ngrx/effects'
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store'

import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { AppComponent } from './app.component'
import { AppBarComponent } from './components/app-bar/app-bar.component'
import { MainLayoutsComponent } from './layouts/main-layouts/main-layouts.component'
import { CurrencyRateChartNbrbModule } from './modules/currency-rate-chart-nbrb/currency-rate-chart-nbrb.module'
import { ExchangeRatesNbrbModule } from './modules/exchange-rates-nbrb/exchange-rates-nbrb.module'
import { StubComponent } from './pages/stub/stub.component'
import { AppRoutingModule } from './routes/app-routing.module'
import { AppEffects } from './store/effects/app.effects'
import { reducers } from './store/reducers';
import { NbrbPageComponent } from './pages/nbrb-page/nbrb-page.component'

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutsComponent,
    AppBarComponent,
    StubComponent,
    NbrbPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    ExchangeRatesNbrbModule,
    MatIconModule,
    MatToolbarModule,
    CurrencyRateChartNbrbModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    AppRoutingModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(reducers, { runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true } }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([AppEffects]),
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {
}

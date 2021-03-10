import { DatePipe } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { MatSliderModule } from '@angular/material/slider'
import { MatToolbarModule } from '@angular/material/toolbar'
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
import { ExchangeRatesNbrbModule } from './modules/exchange-rates-nbrb/exchange-rates-nbrb.module'
import { ChartNbrbPageStubComponent } from './pages/chart-nbrb-page-stub/chart-nbrb-page-stub.component'
import { AppRoutingModule } from './routes/app-routing.module'
import { AppEffects } from './store/effects/app.effects'
import { reducers } from './store/reducers'

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutsComponent,
    AppBarComponent,
    ChartNbrbPageStubComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    ExchangeRatesNbrbModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    AppRoutingModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(reducers, { runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true } }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([AppEffects]),
    MatToolbarModule,
    MatButtonModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {
}

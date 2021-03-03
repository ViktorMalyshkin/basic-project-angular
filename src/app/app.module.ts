import { DatePipe } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { MatSliderModule } from '@angular/material/slider'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EffectsModule } from '@ngrx/effects'
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store'

import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { AppComponent } from './app.component'
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
    CurrencyRateChartNbrbModule,
    MatToolbarModule,
    MatIconModule,
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
    MatButtonModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {
}

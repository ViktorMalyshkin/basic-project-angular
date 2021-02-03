import { NgModule } from '@angular/core'
import { MatSliderModule } from '@angular/material/slider'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreRouterConnectingModule } from '@ngrx/router-store'

import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { AppComponent } from './app.component'
import { TodoModule } from './modules/todo/todo.module'
import { AppEffects } from './store/effects/app.effects'
import { reducers } from './store/reducers'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TodoModule,
    MatSliderModule,
    // StoreModule.forRoot({
    //   router: routerReducer,
    // }),
    RouterModule.forRoot([
      { path: '**', redirectTo: '' },
      // routes
    ]),
    // Connects RouterModule with StoreModule, uses MinimalRouterStateSerializer by default
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(reducers, { runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true } }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

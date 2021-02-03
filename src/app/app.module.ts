import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {AppComponent} from './app.component';
import {reducers} from './store/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './store/effects/app.effects';
import {TodoModule} from './modules/todo/todo.module';

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
      {path: '**', redirectTo: ''},
      // routes
    ]),
    // Connects RouterModule with StoreModule, uses MinimalRouterStateSerializer by default
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(reducers, {runtimeChecks: {strictStateImmutability: true, strictActionImmutability: true}}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

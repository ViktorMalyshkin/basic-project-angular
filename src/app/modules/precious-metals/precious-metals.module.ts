import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromPreciousMetals from './store/reducers/precious-metals.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PreciousMetalsEffects } from './store/effects/precious-metals.effects';
import { PreciousMetalsPageComponent } from './pages/precious-metals-page/precious-metals-page.component';
import { PreciousMetalsTableComponent } from './components/precious-metals-table/precious-metals-table.component';



@NgModule({
  declarations: [PreciousMetalsPageComponent, PreciousMetalsTableComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPreciousMetals.preciousMetalsFeatureKey, fromPreciousMetals.reducer),
    EffectsModule.forFeature([PreciousMetalsEffects])
  ]
})
export class PreciousMetalsModule { }

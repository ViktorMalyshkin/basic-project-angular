import { Action } from '@ngrx/store';

export enum PreciousMetalsActionTypes {
  LoadPreciousMetalss = '[PreciousMetals] Load PreciousMetalss',
  
  
}

export class LoadPreciousMetalss implements Action {
  readonly type = PreciousMetalsActionTypes.LoadPreciousMetalss;
}


export type PreciousMetalsActions = LoadPreciousMetalss;

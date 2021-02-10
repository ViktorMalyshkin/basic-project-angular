import { Component, Input, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { DISPLAYED_COLUMNS_METAL_INGOTS } from '../../constants/displayed-columns.constants'
import { IIngot } from '../../models/ingot.model'
import { IMetalIngots } from '../../models/metal-ingots'
import { IMetal } from '../../models/metal.model'

@Component({
  selector: 'app-precious-metal-rates',
  templateUrl: './precious-metal-rates.component.html',
  styleUrls: ['./precious-metal-rates.component.css'],
})
export class PreciousMetalRatesComponent implements OnInit {
  DISPLAYED_COLUMNS = DISPLAYED_COLUMNS_METAL_INGOTS
  @Input() ingots: IIngot[]
  @Input() metals: IMetal[]

  constructor( private _store: Store ) {
  }

  ngOnInit(): void {
  }

  initMetalIngots(metals: IMetal[], ingots: IIngot[]): IMetalIngots[] {
    return ingots.map(( item ) => {
      const nameMetal = metals[ item.MetalID ].Name
      return Object.assign({ ...item, Name: nameMetal })
    })
  }

}

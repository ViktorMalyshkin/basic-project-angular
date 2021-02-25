import {Component, Input} from '@angular/core'
import {DISPLAYED_COLUMNS_METAL_INGOTS} from '../../constants/displayed-columns.constants'
import {PriceModel} from '../../models/price.model'
import {IMetalIngots} from '../../models/metal-ingots'
import {MetalModel} from '../../models/metal.model'

@Component({
  selector: 'app-precious-metal-rates',
  templateUrl: './precious-metal-rates.component.html',
  styleUrls: ['./precious-metal-rates.component.css'],
})
export class PreciousMetalRatesComponent {
  DISPLAYED_COLUMNS = DISPLAYED_COLUMNS_METAL_INGOTS
  @Input() prices: PriceModel[]
  @Input() metals: MetalModel[]


  initMetalIngots(metals: MetalModel[], prices: PriceModel[]): IMetalIngots[] {
    return prices.map((item) => {
      const nameMetal = metals[item.id].name
      return Object.assign({...item, name: nameMetal})
    })
  }

}

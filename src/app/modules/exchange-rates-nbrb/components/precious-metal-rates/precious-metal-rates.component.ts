import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { IMetal } from '../../models/metal.model'
import { selectPreciousMetalList } from '../../store/selectors/precious-metals.selectors'

@Component({
  selector: 'app-precious-metal-rates',
  templateUrl: './precious-metal-rates.component.html',
  styleUrls: ['./precious-metal-rates.component.css'],
})
export class PreciousMetalRatesComponent implements OnInit {
  metals$: Observable<IMetal[]>

  constructor( private _store: Store ) {
    setTimeout(() => {
      // this.metals$ = this._store.select(selectPreciousMetalList)
    }, 2000)
  }

  ngOnInit(): void {
  }

}

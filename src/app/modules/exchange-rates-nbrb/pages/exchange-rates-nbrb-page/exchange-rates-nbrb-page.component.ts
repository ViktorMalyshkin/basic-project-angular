import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers/exchange-rates-nbrb.reducer';

@Component({
  selector: 'app-exchange-rates-nbrb-page',
  templateUrl: './exchange-rates-nbrb-page.component.html',
  styleUrls: ['./exchange-rates-nbrb-page.component.css']
})
export class ExchangeRatesNbrbPageComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}

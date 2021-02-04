import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers/precious-metals.reducer';

@Component({
  selector: 'app-precious-metals-page',
  templateUrl: './precious-metals-page.component.html',
  styleUrls: ['./precious-metals-page.component.css']
})
export class PreciousMetalsPageComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}

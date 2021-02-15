import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

interface Animal {
  name: string,
  sound: string,
}

@Component({
  selector: 'app-ui-select-feature',
  templateUrl: './ui-select-feature.component.html',
  styleUrls: ['./ui-select-feature.component.css'],
})
export class UiSelectFeatureComponent implements OnInit {
  @Input() items: any
  currenciesControl = new FormControl('', Validators.required)
  @Output()
  selectionChange: EventEmitter<any>

  constructor() { }

  ngOnInit(): void {
  }

}

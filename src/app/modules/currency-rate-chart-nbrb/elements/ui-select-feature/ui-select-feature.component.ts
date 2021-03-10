import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-ui-select-feature',
  templateUrl: './ui-select-feature.component.html',
  styleUrls: ['./ui-select-feature.component.sass'],
})
export class UiSelectFeatureComponent implements OnInit {
  currenciesControl: FormControl
  @Input() items: any
  @Input() hintTitle: any
  @Input() selectItem: any
  @Output() selectionChange = new EventEmitter<any>()

  constructor() {}

  ngOnInit(): void {
    this.currenciesControl = new FormControl(this.selectItem.id, Validators.required)
  }

  selectionChangeEvent( $event ): void {
    this.selectionChange.emit($event)
  }
}

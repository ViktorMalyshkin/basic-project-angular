import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter'
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core'

@Component({
  selector: 'app-ui-datepicker',
  templateUrl: './ui-datepicker.component.html',
  styleUrls: ['./ui-datepicker.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class UiDatepickerComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  })

  minDate = new Date(2020, 1, 20)
  maxDate = new Date()

  @Input() isDisabledDatepicker: boolean

  @Input() set curDateStart( minDate: Date ) {
    this.minDate = minDate
  }
  get curDateStart(): Date {
    return this.minDate
  }

  @Input() set curDateEnd( maxDate: Date ) {
    this.maxDate = maxDate
  }
  get curDateEnd(): Date {
    return this.maxDate
  }

  @Output()
  selectionRange = new EventEmitter<any>()

  @Output()
  selectionStartDate = new EventEmitter<Date>()

  @Output()
  selectionEndDate = new EventEmitter<Date>()

  constructor() {}

  ngOnInit(): void {}

  selectionRangeEvent( $event ): void {
    alert($event.value)
    this.selectionRange.emit($event)
  }

  selectionStartDateEvent( $event ): void {
    this.selectionStartDate.emit($event)
  }

  selectionEndDateEvent( $event ): void {
    this.selectionEndDate.emit($event)
  }
}

import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter'
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core'
import { MatEndDate, MatStartDate } from '@angular/material/datepicker'

@Component({
  selector: 'app-ui-datepicker',
  templateUrl: './ui-datepicker.component.html',
  styleUrls: ['./ui-datepicker.component.sass'],
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
  range: FormGroup
  minDate = new Date(2020, 1, 20)
  maxDate = new Date()

  @Input() selectItem: any

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

  @ViewChild('inputStartDate', {
    read: MatStartDate,
  }) inputStartDate: MatStartDate<Date>

  @ViewChild('inputEndDate', {
    read: MatEndDate,
  }) inputEndDate: MatEndDate<Date>

  constructor() {}

  ngOnInit(): void {
    this.range = new FormGroup({
      start: new FormControl(this.selectItem.date_start),
      end: new FormControl(this.selectItem.date_end),
    })
  }

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

  resetDateRangeInput(): void {
    this.inputStartDate.value = null
    this.inputEndDate.value = null
  }
}

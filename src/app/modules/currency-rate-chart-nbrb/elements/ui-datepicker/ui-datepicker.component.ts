import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter'
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core'

@Component({
  selector: 'app-ui-datepicker',
  templateUrl: './ui-datepicker.component.html',
  styleUrls: ['./ui-datepicker.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-UK' },
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

  minDate = new Date()
  maxDate = new Date(2021, 1, 20)

  constructor() {}

  ngOnInit(): void {
  }

}

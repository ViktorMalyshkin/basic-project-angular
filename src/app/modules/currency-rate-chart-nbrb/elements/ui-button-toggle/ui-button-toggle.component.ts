import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-ui-button-toggle',
  templateUrl: './ui-button-toggle.component.html',
  styleUrls: ['./ui-button-toggle.component.css'],
})
export class UiButtonToggleComponent implements OnInit {

  @Input() disabled: boolean
  @Output() dates = new EventEmitter<object>()

  constructor() { }

  ngOnInit(): void {
  }

  basicDataSelection( $event, type ): void {
    const today = new Date()
    switch (type) {
      case 'week':
        // weekAgo.toLocaleDateString()
        this.dates.emit({
          startDate: new Date().setDate(today.getDate() - 7),
          endDate: today,
        })
        break
      case 'month':
        this.dates.emit({
          startDate: new Date().setMonth(today.getMonth() - 1),
          endDate: today,
        })
        break
      case 'quarter-of-year':
        this.dates.emit({
          startDate: new Date().setMonth(today.getMonth() - 3),
          endDate: today,
        })
        break
      case 'half-year':
        this.dates.emit({
          startDate: new Date().setMonth(today.getMonth() - 6),
          endDate: today,
        })
        break
      case 'year':
        this.dates.emit({
          startDate: new Date().setMonth(today.getMonth() - 12),
          endDate: today,
        })
        break
      default:
        this.dates.emit({
          startDate: today,
          endDate: today,
        })
        break
    }
  }

}

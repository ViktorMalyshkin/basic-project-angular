import {Component, Input} from '@angular/core'

@Component({
  selector: 'app-el-table',
  templateUrl: './el-table.component.html',
  styleUrls: ['./el-table.component.css'],
})
export class ElTableComponent {
  @Input() dataSource: any[]
  @Input() displayedColumns: any[]


  checkDataToDisplay(displayedColumn: string): boolean {
    return displayedColumn === 'date'
  }

  isDataSource(): boolean {
    return this.dataSource.length !== 0
  }

  d(displayedColumns): any {
    return displayedColumns.map((i) => i.key)
  }
}

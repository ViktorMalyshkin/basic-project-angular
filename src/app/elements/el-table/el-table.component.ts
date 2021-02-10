import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-el-table',
  templateUrl: './el-table.component.html',
  styleUrls: ['./el-table.component.css'],
})
export class ElTableComponent implements OnInit {
  @Input() dataSource: any[]
  @Input() displayedColumns: any[]

  constructor() { }

  ngOnInit(): void {
  }


  checkDataToDisplay( displayedColumn: string ): boolean {
    return displayedColumn === 'Date'
  }
}

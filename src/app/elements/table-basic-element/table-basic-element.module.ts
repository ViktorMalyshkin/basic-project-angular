import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatTableModule } from '@angular/material/table'
import { TableBasicElementComponent } from './component/table-basic-element/table-basic-element.component'


@NgModule({
  declarations: [TableBasicElementComponent],
  exports: [
    TableBasicElementComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ],
})
export class TableBasicElementModule {}

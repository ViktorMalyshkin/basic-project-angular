import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-el-card',
  templateUrl: './el-card.component.html',
  styleUrls: ['./el-card.component.sass'],
})
export class ElCardComponent implements OnInit {
  @Input() item: any


  constructor() { }

  ngOnInit(): void {
  }

}

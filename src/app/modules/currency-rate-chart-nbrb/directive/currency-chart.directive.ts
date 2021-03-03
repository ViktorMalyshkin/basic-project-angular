import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, OnChanges } from '@angular/core'
import * as d3 from 'd3'
import { ChartDataModel } from '../models/chart-data.model'

@Directive({
  selector: '[appCurrencyChart]',
})
export class CurrencyChartDirective implements OnChanges, AfterViewInit {
  margin = { top: 20, right: 20, bottom: 30, left: 40 }

  @Input() data: ChartDataModel[]

  @HostBinding('style') style: object

  @HostListener('window:resize') onResize(): void {
    this.createChart()
  }

  constructor( private chartContainer: ElementRef ) {
    console.log(chartContainer)
    this.style = {
      height: 'inherit',
      width: 'inherit',
      minHeight: '480px',
    }
  }


  ngOnChanges(): void {
    if (this.chartContainer) {
      this.createChart()
    }
  }

  ngAfterViewInit(): void {
    if (this.data.length !== 0) {
      this.createChart()
    }
  }

  isData(): boolean {
    return this.data.length !== 0
  }

  private createChart(): void {
    d3.select('svg').remove()
    if (this.isData()) {
      const element = this.chartContainer.nativeElement
      console.log(this.chartContainer)
      const data = this.data

      const svg = d3.select(element).append('svg')
        .attr('width', element.offsetWidth)
        .attr('height', element.offsetHeight)

      const contentWidth = element.offsetWidth - this.margin.left - this.margin.right
      const contentHeight = element.offsetHeight - this.margin.top - this.margin.bottom

      const x = d3
        .scaleBand()
        .rangeRound([0, contentWidth])
        .domain(data.map(d => d.xAxis))
        .padding(0.1)

      const y = d3
        .scaleLinear()
        .rangeRound([contentHeight, 0])
        .domain([0, d3.max(data, d => d.yAxis)])

      const g = svg.append('g')
        .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')')

      g.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + contentHeight + ')')
        .call(d3.axisBottom(x))

      g.append('g')
        .attr('class', 'axis axis--y')
        .call(d3.axisLeft(y).ticks(20))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('yAxis')

      g.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.xAxis))
        .attr('y', d => y(d.yAxis))
        .attr('width', x.bandwidth())
        .attr('height', d => contentHeight - y(d.yAxis))
    }
  }
}

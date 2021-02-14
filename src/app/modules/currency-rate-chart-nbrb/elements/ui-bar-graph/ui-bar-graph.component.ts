import { Component, ElementRef, OnChanges, OnInit, ViewChild, ViewEncapsulation } from '@angular/core'
import * as d3 from 'd3'
import { Observable } from 'rxjs'
import { DataModel } from '../../models/data.model'

@Component({
  selector: 'app-ui-bar-graph',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './ui-bar-graph.component.html',
  styleUrls: ['./ui-bar-graph.component.scss'],
})
export class UiBarGraphComponent implements OnInit, OnChanges {
  url = 'https://raw.githubusercontent.com/diveshpanwar/d3-graph-data/master/heat-map.csv'
  description = 'USD'
  title = 'Currency Rate Chart NBRB'

  data: DataModel[]
  data2: Observable<DataModel[]>

  @ViewChild('chart')
  private chartContainer: ElementRef
  margin = { top: 20, right: 20, bottom: 30, left: 40 }


  constructor() {
    this.data = [
      {
        letter: 'A',
        frequency: 0.08167,
      },
      {
        letter: 'B',
        frequency: 0.01492,
      },
      {
        letter: 'C',
        frequency: 0.02782,
      },
      {
        letter: 'D',
        frequency: 0.04253,
      },
      {
        letter: 'E',
        frequency: 0.12702,
      },
      {
        letter: 'F',
        frequency: 0.02288,
      },
      {
        letter: 'G',
        frequency: 0.02015,
      },
      {
        letter: 'H',
        frequency: 0.06094,
      },
      {
        letter: 'I',
        frequency: 0.06966,
      },
      {
        letter: 'J',
        frequency: 0.00153,
      },
      {
        letter: 'K',
        frequency: 0.00772,
      },
      {
        letter: 'L',
        frequency: 0.04025,
      },
      {
        letter: 'M',
        frequency: 0.02406,
      },
      {
        letter: 'N',
        frequency: 0.06749,
      },
      {
        letter: 'O',
        frequency: 0.07507,
      },
      {
        letter: 'P',
        frequency: 0.01929,
      },
      {
        letter: 'Q',
        frequency: 0.00095,
      },
      {
        letter: 'R',
        frequency: 0.05987,
      },
      {
        letter: 'S',
        frequency: 0.06327,
      },
      {
        letter: 'T',
        frequency: 0.09056,
      },
      {
        letter: 'U',
        frequency: 0.02758,
      },
      {
        letter: 'V',
        frequency: 0.00978,
      },
      {
        letter: 'W',
        frequency: 0.0236,
      },
      {
        letter: 'X',
        frequency: 0.0015,
      },
      {
        letter: 'Y',
        frequency: 0.01974,
      },
      {
        letter: 'Z',
        frequency: 0.00074,
      },
    ]
  }

  ngOnChanges(): void {
    if (!this.data) { return }

  }

  ngOnInit(): void {
    this.createChart()
  }

  private createChart(): void {
    console.log('HI')
    d3.select('svg').remove()

    const element = this.chartContainer.nativeElement
    const data = this.data

    const svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight)

    const contentWidth = element.offsetWidth - this.margin.left - this.margin.right
    const contentHeight = element.offsetHeight - this.margin.top - this.margin.bottom

    const x = d3
      .scaleBand()
      .rangeRound([0, contentWidth])
      .padding(0.1)
      .domain(data.map(d => d.letter))

    const y = d3
      .scaleLinear()
      .rangeRound([contentHeight, 0])
      .domain([0, d3.max(data, d => d.frequency)])

    const g = svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')')

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + contentHeight + ')')
      .call(d3.axisBottom(x))

    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y).ticks(10, '%'))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Frequency')

    g.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.letter))
      .attr('y', d => y(d.frequency))
      .attr('width', x.bandwidth())
      .attr('height', d => contentHeight - y(d.frequency))
  }

  onResize(event): void {
    console.log('event', event.value)
    this.createChart()
  }
}

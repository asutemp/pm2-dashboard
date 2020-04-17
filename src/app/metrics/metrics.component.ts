import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

  @Input() heapSizeValue: string;
  @Input() heapSizeUnit: string;
  @Input() heapUsageValue: string;
  @Input() heapUsageUnit: string;
  @Input() usedHeapSizeValue: string;
  @Input() usedHeapSizeUnit: string;
  @Input() activeRequestsValue: string;
  @Input() activeHandelsValue: string;
  @Input() eventLoopLatencyValue: string;
  @Input() eventLoopLatencyUnit: string;
  @Input() eventLoopLatencyP95Value: string;
  @Input() eventLoopLatencyP95Unit: string;
  @Input() httpMeanLatencyValue: string;
  @Input() httpMeanLatencyUnit: string;
  @Input() httpP95LatencyValue: string;
  @Input() httpP95LatencyUnit: string;
  @Input() httpValue: string;
  @Input() httpUnit: string;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Processes } from '../processes/processNames';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

  @Input() jlist: Processes;
  
  constructor() { }

  ngOnInit(): void {
  }

}

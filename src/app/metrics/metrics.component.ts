import { Component, OnInit, Input } from '@angular/core';
import { Processes } from '../processes/processNames';
import { Observable } from 'rxjs';
import { StrCompService } from '../str-comp.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

  @Input() obsJlist: Observable<Processes[]>;
  @Input() chosenProcess: string;
  jlist: Processes;
  
  constructor(public strcomp: StrCompService) { }

  async ngOnInit() { }

  keepOrder = (a, b) => {
    return a;
  }

  checkIsString(str: string){
    return typeof(str) === 'string';
  }

}

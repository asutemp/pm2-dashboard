import { Component, OnInit, Input } from '@angular/core';
import { Processes } from '../processes/processNames';
import { Observable } from 'rxjs';
import { StrCompService } from '../str-comp.service';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit {

  @Input() obsJlist: Observable<Processes[]>;
  @Input() chosenProcess: string;
  jlist: Processes;
  getDateTime = new Date();
  
  constructor(public strcomp: StrCompService) { }

  ngOnInit(): void { }

  

}

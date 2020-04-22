import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Processes } from './processNames';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.css']
})
export class ProcessesComponent implements OnInit {
  @Output() selectedProcess = new EventEmitter<string>();
  @Input() obsJlist: Observable<Processes[]>;
  jlist: Processes;
  
   
   constructor() { }
   
   ngOnInit() {
	
   }
   
   onSelected(process: string) {
    this.selectedProcess.emit(process);
   }
} 
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.css']
})
export class ProcessesComponent implements OnInit {
   @Output() selectedProcess = new EventEmitter<string>();
   @Input() processNames: string[] = new Array;
   
   constructor() { }
   
   ngOnInit() {
	
   }
   
   onSelected(process: string) {
    this.selectedProcess.emit(process);
   }
} 
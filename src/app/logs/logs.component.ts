import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { LogReaderService } from './log-reader.service';
import { BashCommandsService } from '../php/bash-commands.service';
import { Processes } from '../processes/processNames';
import { element } from 'protractor';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  @Input() logPath: string;
  @Input() chosenProcess: string;
  logIntermediary: Observable<string>;
  logOutput: string[];
  providers: [LogReaderService, BashCommandsService];
  splitPath: string[];

  constructor(private logreaderservice: LogReaderService, private bashcommandservice: BashCommandsService) { }

  ngOnInit() {
    
	  this.getLog(this.getLogPath(this.logPath));
   }

  getLogPath(chosenLog: string):string {
    console.log(chosenLog);
    this.splitPath = chosenLog.split("\\");
    console.log("this.splitPath");
    console.log(this.splitPath);
    console.log(this.splitPath.values);
    return this.splitPath[this.splitPath.length-2]
   }

  async getLog(path: string){
    this.bashcommandservice.execBsh();
    this.logIntermediary = await this.logreaderservice.getObsLog(path);
    this.logIntermediary
      .subscribe(data => this.logOutput = data.split('\n'));
    console.log(this.logOutput);
  }



}

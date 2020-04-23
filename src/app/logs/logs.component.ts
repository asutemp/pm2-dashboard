import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { LogReaderService } from './log-reader.service';
import { BashCommandsService } from '../php/bash-commands.service';
import { Processes } from '../processes/processNames';
import { StrCompService } from '../str-comp.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  @Input() obsJlist: Observable<Processes[]>;
  @Input() chosenProcess: string;
  logIntermediary: Observable<string>;
  logOutput: string[];
  providers: [LogReaderService, BashCommandsService];
  splitPath: string[];
  logType: [(NgModel)];
  logPath: string;

  constructor(
    private logreaderservice: LogReaderService,
    private bashcommandservice: BashCommandsService,
    public strcomp: StrCompService
    ) { }

  ngOnInit() { }

  getLogPath(chosenLog: string):string {
    this.splitPath = chosenLog.split("/");
    this.logPath = "./assets/"+this.splitPath[this.splitPath.length-1]
    return this.logPath
   }

  async getLog(path: string){
    this.bashcommandservice.execBsh();
    this.logIntermediary = await this.logreaderservice.getObsLog(path);
    this.logIntermediary
      .subscribe(data => this.logOutput = data.split('\n'));
  }

  logIt(incoming: any){
    console.log(incoming);
  }

}

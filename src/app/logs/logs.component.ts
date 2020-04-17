import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { LogReaderService } from './log-reader.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  @Input() logPath: string;
  logIntermediary: Observable<string>;
  logOutput: string[];
  providers: [LogReaderService];

  constructor(private logreaderservice: LogReaderService) { }

  ngOnInit() {
	  this.getLog(this.logPath);
   }

  async getLog(path: string){
    this.logIntermediary = await this.logreaderservice.getObsLog(path);
    this.logIntermediary
      .subscribe(data => this.logOutput = data.split('\n'));
    console.log(this.logOutput);
  }

}

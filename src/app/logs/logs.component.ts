import { Component, OnInit, Input } from '@angular/core';
import { Processes } from '../processes/processNames';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  @Input() logPath: string;
  logOutput: Observable<string[]>

  constructor(private http: HttpClient) { }

  ngOnInit() {
	  this.getLog(this.logPath);
   }

  getLog(path: string){
    this.logOutput = this.getObsLog(path);
  }

  getObsLog(logPath: string): Observable<string[]> {
    return this.http.get<string[]>(logPath);
  }

}

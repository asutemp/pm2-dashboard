import { Component, Input } from '@angular/core';
import { JlistService } from './jlist/jlist.service';
import { Processes } from './processes/processNames';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Local
  title = 'pm2-dashboard';
  obsJlist: Observable<Processes[]>;
  logType: string;
  processList: string[] = new Array;
  selectedJlist: Processes;
  providers: [JlistService];
  processesMatch: Boolean = false;

  // Input from Processes
  @Input() chosenProcess: string;
  
  constructor(private jlistService: JlistService) {}

  async ngOnInit() {
    this.obsJlist = await this.jlistService.getJSON();
    this.obsJlist
      .subscribe(data => data.forEach(element => {
        this.processList.push(element.name);
      }))
   }   

   strCompare(chosen: string, currIter: string) {
     console.log(chosen === currIter);
     return chosen === currIter;
   }
   

}

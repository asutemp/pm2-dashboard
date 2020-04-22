import { Component, Input } from '@angular/core';
import { JlistService } from './jlist/jlist.service';
import { Processes } from './processes/processNames';
import { Observable } from 'rxjs';
import { BashCommandsService } from './php/bash-commands.service';
import { StrCompService } from './str-comp.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Local
  title = 'pm2-dashboard';
  obsJlist: Observable<Processes[]>;
  logType: [(NgModel)];
  selectedJlist: Processes;
  providers: [JlistService];
  processesMatch: Boolean = false;

  // Input from Processes
  @Input() chosenProcess: string;
  
  constructor(
    private jlistService: JlistService,
    private bshservice: BashCommandsService,
    public strcomp: StrCompService) {}

  async ngOnInit() {
    this.bshservice.execBsh();
    this.obsJlist = await this.jlistService.getJSON();
  }   

}

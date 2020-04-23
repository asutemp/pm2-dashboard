import { Component, OnInit, Output } from '@angular/core';
import { BashCommandsService } from '../php/bash-commands.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  @Output() refreshRate: number = 5;

  constructor(public bashcmd: BashCommandsService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit {

  @Input() name: string;
  @Input() namespace: string;
  @Input() version: string;
  @Input() unstable_restarts: string;
  @Input() pm_uptime: string;
  @Input() pm_exec_path: string;
  @Input() args: string;
  @Input() exec_interpreter: string;
  @Input() node_args: string;
  @Input() exec_mode: string;
  @Input() node_version: string;
  @Input() watch: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}

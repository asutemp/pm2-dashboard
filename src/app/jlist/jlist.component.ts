import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Processes } from '../processes/processNames';

@Component({
  selector: 'app-jlist',
  templateUrl: './jlist.component.html',
  styleUrls: ['./jlist.component.css']
})
export class JlistComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
  
  jlistLoc = "/assets/jlist.json";
  getJSON(): Observable<Processes[]> {
    return this.http.get<Processes[]>(this.jlistLoc);
  }
  
}


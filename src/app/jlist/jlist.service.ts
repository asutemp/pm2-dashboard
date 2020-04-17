import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Processes } from '../processes/processNames';

@Injectable({
  providedIn: 'root'
})
export class JlistService {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
  
  jlistLoc = "/assets/jlist.json";
  async getJSON(): Promise<Observable<Processes[]>> {
    const value = this.http.get<Processes[]>(this.jlistLoc);
    return value;
  }
  
}

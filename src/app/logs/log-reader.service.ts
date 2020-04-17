import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogReaderService {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
  
  async getObsLog(logPath: string): Promise<Observable<string>> {
    const value = this.http.get(logPath, {responseType: 'text'});
    return value;
  }
  
  
}
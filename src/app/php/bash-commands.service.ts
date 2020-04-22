import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BashCommandsService {

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {

  }
  
  execBsh(){
    console.log("I've been hit!");
    this.httpClient.get('http://localhost/test.php');
    return true;
  }
}

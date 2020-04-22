import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StrCompService {

  constructor() { }

  strCompare(chosen: string, currIter: string) {
    return chosen === currIter;
  }

}

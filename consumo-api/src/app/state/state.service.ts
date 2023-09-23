import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(
    private http: HttpClient
  ) { }

  getCharacters():Observable<any>{
    return this.http.get('https://rickandmortyapi.com/api/character')
  }
 
  getLocation():Observable<any>{
    return this.http.get('https://rickandmortyapi.com/api/location')
  }
 }


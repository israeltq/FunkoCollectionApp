import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Funko } from '../models/funko';


@Injectable({
  providedIn: 'root'
})
export class FunkoService {
  private readonly server = `${environment.serverUrl}:${environment.serverPort}/${environment.serverRoute}/funko`;

  constructor(private http: HttpClient) { }

  createNewFunko(newFunko: Funko): Observable<any> {
    const headers =  {
      headers: new  HttpHeaders({
        'Content-Type': 'application/json'})
    };

    return this.http.post(this.server, newFunko, headers);
  }
}

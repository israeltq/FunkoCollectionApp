import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '../environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly server = `${environment.serverUrl}:${environment.serverPort}/${environment.serverRoute}/user`;

  constructor(private http: HttpClient) { }

  createNewUser(newUser: User): Observable<any> {
    const headers =  {
      headers: new  HttpHeaders({
        'Content-Type': 'application/json'})
    };

    return this.http.post(this.server, newUser, headers);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BASEURL } from '../core/http/url';

@Injectable({
  providedIn: 'root'
})
export class MyAccount {
  constructor(private http: HttpClient) {}

  validateEmail(email: string): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<boolean>(`${BASEURL}/users/validate-user-email?email=${email}`, { headers });
  }
}

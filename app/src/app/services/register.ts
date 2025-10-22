import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUser } from '../types/register-user';

import { BASEURL } from '../core/http/url';

@Injectable({
  providedIn: 'root',
})
export class Register {
  constructor(private readonly http: HttpClient) {}

  registerUser(user: RegisterUser) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<RegisterUser>(`${BASEURL}/users/register`, user, {
      headers,
    });
  }
}

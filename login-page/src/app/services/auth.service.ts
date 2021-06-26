import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login() {
    let config = 'http://localhost:3000/api/login'
    return this.http.post(config, {});
  }
}

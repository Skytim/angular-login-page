import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  config = '';
  constructor(private http: HttpClient) {
    if (isDevMode()) {
      this.config = 'http://localhost:3000/'
    } else {
      this.config = 'https://thawing-wave-52886.herokuapp.com/';
    }
    this.config = 'https://thawing-wave-52886.herokuapp.com/';
    this.config += 'api/login'
  }

  login(Acc: string, UserID: string, Pw: string) {

    return this.http.post(this.config, { Acc, UserID, Pw }, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'Access-Control-Max-Age': '86400'
      })
    });
  }


  disPlayAcc(word: string) {
    let result = '';
    for (let i = 0; i < word.length; i++) {
      if (i < 4) {
        result += word[i]
      } else if (i > word.length - 4) {
        result += word[i];
      } else {
        result += '*'
      }
    }
    return result;
  }

}

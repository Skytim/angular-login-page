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

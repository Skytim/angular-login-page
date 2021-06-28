import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { Base64 } from 'js-base64';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModalService } from './modal.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  config = '';
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  isResetAccSubject = new BehaviorSubject<boolean>(this.hasAcc());

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  private hasAcc(): boolean {
    return !!localStorage.getItem('Account');
  }

  constructor(private router: Router, private http: HttpClient, private modalService: ModalService) {
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
    }).subscribe((res: any) => {
      /// Redirect to main
      if (res['po_Login_19_2'].ReturnCode === 0) {
        localStorage.setItem('token', Base64.encode(res['po_Login_19_2'].Token));
        localStorage.setItem('Account', Base64.encode(Acc));
        this.router.navigate(['/main']);
        this.isLoginSubject.next(true);

      } else if (res['po_Login_19_2'].ReturnCode === -11) {

        this.modalService.openResDialog(res['po_Login_19_2'].ReturnMessageTitle, res['po_Login_19_2'].ReturnMessage, 4);

      } else if (res['po_Login_19_2'].ReturnCode === -14) {

        this.modalService.openResDialog(res['po_Login_19_2'].ReturnMessageTitle, res['po_Login_19_2'].ReturnMessage, 5);
      }

    });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }

  remAcc(): void {
    this.isResetAccSubject.next(true);
  }

  unRemAcc(): void {
    this.isResetAccSubject.next(false);
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

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  isRemAcc(): Observable<boolean> {
    return this.isResetAccSubject.asObservable();
  }
}

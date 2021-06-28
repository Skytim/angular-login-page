import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Base64 } from 'js-base64';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = Base64.decode(localStorage.getItem('token') || '');
    if (token === 'BA7F6963-442B-4AC1-A38A-EBEEC1B2516B') {
      return true;
    }
    this.router.navigate(['/login']);

    return false;
  }

}

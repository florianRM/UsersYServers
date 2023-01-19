import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router, ActivatedRoute, CanActivateChild } from '@angular/router';
import { Observable, of, switchMap, catchError } from 'rxjs';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }
  
  canActivate(): Observable<boolean> {
    // if(!localStorage.getItem('login')) {
    //   this.router.navigate(['/']);
    //   return false;
    // }
    return this.authService.isAuthenticated();
    // .pipe( switchMap(resp => {
    //   console.log(resp)
    //   if (resp) return of(true);
    //   return of(false);
    // }))
    
  }
}

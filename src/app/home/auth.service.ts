import { Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Token } from './interface/token.interface';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private url: string = "https://reqres.in/api";
  private url: string = "http://localhost:8000/auth/login";
  private urlToken: string = "http://localhost:8000/jwt";
  isAdmin: boolean = false;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient, private cookies: CookieService, private usersService: UsersService, private route: Router) { }

  // login(user: any): Observable<any> {
  //   return this.http.post<any>(`${this.url}/login`, user, this.httpOptions);
  // }

  // register(user: any): Observable<any> {
  //   return this.http.post<any>(`${this.url}/register`, user, this.httpOptions);
  // }

  // setToken(token: string) {
  //   this.cookies.set('token', token);
  // }

  // getToken() {
  //   return this.cookies.get('token');
  // }

  // isAuthenticated(email: string, password: string): void {
  //   this.usersService.getUserByEmail(email)
  //   .subscribe({
  //     next: res => {
  //       if(res.length && password === res[0].name) {
  //         localStorage.setItem('login', 'true');
  //       }
  //     }
  //   })
  // }

  // login(email: string, password: string):Observable<boolean>{
  //   //Recuperamos el usuario y comprobamos que la contraseña sea correcta
  //   return this.usersService.getUserByEmail(email)
  //   .pipe( switchMap((user=> {
  //     if (user.length && user[0].name===password){
  //       localStorage.setItem('authenticated', 'true');
  //       return of(true)
  //     }
  //     else{
  //       localStorage.setItem('authenticaded', 'false');
  //       return of(false)
  //     }
  //   })))
  // }

  isAuthenticated(): Observable<boolean> {
    const httpHeaders: HttpHeaders = new HttpHeaders()
    .set('Authorization', `Bearer ${this.cookies.get('token')}`
    );

    return this.http.get<any>(this.urlToken)
    .pipe( switchMap(resp => {
      return of(true);
    }), catchError(error => {
      this.cookies.delete('token');
      return of(false);
    }))
  }

  login(email: string, password: string): Observable<boolean> {
    const user = {email, password}
    return this.http.post<Token>(this.url, user, this.httpOptions)
    .pipe( switchMap(token => {
      this.cookies.set('token', token.access_token);
      return of(true);
    }), catchError(error => {
      this.cookies.delete('token');
      return of(false);
    }))
  }

  logout(): void {
    this.cookies.delete('token');
    this.route.navigate(['/']);
  }
}

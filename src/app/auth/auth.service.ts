import { Injectable } from '@angular/core';
import { User } from '../users/interfaces/user.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private url: string = "https://reqres.in/api";
  private url: string = "http://localhost:3000/auth/login";
  private user!: User;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient, private cookies: CookieService) { }

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

  // login(email: string, password: string): void {
  //   const login = localStorage.getItem('login');
  //   this.http.get<User[]>(`${this.url}?q=${email}`)
  //   .subscribe({
  //     next: res => {
  //       if(!login && email === res[0].email && password === res[0].name) {
  //         localStorage.setItem('login', 'true');
  //       }
  //     }
  //   })
  // }

  isAuthenticated(email: string, password: string): void {
    const user = {email, password}
    this.http.post<string>(this.url, user)
    .subscribe({
      next: res => localStorage.setItem('token', res),
      error: err => console.log(err)
    });
  }

  logout(): void {
    localStorage.removeItem('login');
  }
}

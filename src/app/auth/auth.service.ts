import { Injectable } from '@angular/core';
import { User } from '../users/interfaces/user.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = "https://reqres.in/api";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(user: any): Observable<any> {
    return this.http.post<any>(`${this.url}/login`, user, this.httpOptions);
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.url}/register`, user, this.httpOptions);
  }

  setToken(token: string) {
    this.cookies.set('token', token);
  }

  getToken() {
    return this.cookies.get('token');
  }
}

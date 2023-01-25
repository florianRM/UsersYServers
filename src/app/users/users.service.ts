import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './interfaces/user.interface';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url: string = 'http://localhost:8000/users';

  constructor(private http: HttpClient, private cookies:CookieService) { }

  users(): Observable<User[]> {
    const httpHeaders: HttpHeaders = new HttpHeaders()
    .set('Authorization', `Bearer ${this.cookies.get('token')}`
    );
    return this.http.get<User[]>(this.url,{headers: httpHeaders}  );
  }

  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}?email=${email}`);
  }

  user(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`)
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

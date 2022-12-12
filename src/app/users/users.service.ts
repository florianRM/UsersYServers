import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  users(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
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

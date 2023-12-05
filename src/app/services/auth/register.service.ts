import { Injectable } from '@angular/core';
import { RegisterRequest } from './registerRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  register(arg0: RegisterRequest) {
    throw new Error('Method not implemented.');
  }

  url = 'http://localhost:8080/api/users'

  
  constructor(private http: HttpClient) { }

  userRegister(user: User): Observable<any>{
    return this.http.post(this.url, user)
  }
}

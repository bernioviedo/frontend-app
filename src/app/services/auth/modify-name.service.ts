import { Injectable } from '@angular/core';
import { RegisterRequest } from './registerRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ModifyNameService {

    currentUserRegister:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({id:0, email:'', name:'', lastName:''});
  
    constructor(private http: HttpClient) { }
  
    register(credentials:RegisterRequest):Observable<User>{
       console.log(credentials);
      return this.http.get<User>('././assets/data.json').pipe(
        tap( (userData: User) =>{
          this.currentUserData.next(userData);
          this.currentUserRegister.next(true);
        } ),
        catchError(this.handleError)
      )
    }
  
    private handleError(error:HttpErrorResponse){
      if(error.status===404){
        console.error('Se ha producido un error', error.error);
      }
      else{
        console.error('Backend retornó el código de estado', error.status, error.error);
      }
      return throwError(()=> new Error('Algo falló. Por favor intente nuevamente.'))
    }
  
    get userData():Observable<User>{
      return this.currentUserData.asObservable();
    }
  
    get userRegister():Observable<boolean>{
      return this.currentUserRegister.asObservable();
    }
  }
  
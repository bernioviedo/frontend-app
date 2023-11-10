import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';
import { User } from 'src/app/services/auth/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent /*implements LoginService*/{
    currentUserLoginOn:BehaviorSubject<boolean>= new BehaviorSubject<boolean>(true);
    currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({id:0, email:''});

    constructor(private loginService:LoginService, private router:Router) { }

    /*get userLoginOn():Observable<boolean>{
      return this.currentUserLoginOn.asObservable();
    }*/

    logout(){
      if(this.currentUserLoginOn){
        this.currentUserLoginOn.next(false);
        this.currentUserData = new BehaviorSubject<User>({id:0, email:''});
        this.currentUserData.unsubscribe();
        this.router.navigate(['/inicio']).then(() =>{
          window.location.reload()
        });
      }
      else{
        console.log('no se no anda')
      }

    }
    ngOnInit(): void {
      this.logout()
    }
    /*ngOnDestroy(): void {
      this.loginService.currentUserLoginOn.unsubscribe()
      console.log(this.userLoginOn)*/
 }

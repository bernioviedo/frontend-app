import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { RegisterService } from 'src/app/services/auth/register.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
    userLoginOn:boolean=false;
      constructor(private loginService:LoginService, private registerService:RegisterService) { }
  
      ngOnInit(): void {
        this.loginService.currentUserLoginOn.subscribe(
          {
            next:(userLoginOn) => {
              this.userLoginOn=userLoginOn;
            }
          }
        );

        /*this.registerService.currentUserRegister.subscribe(
          {
            next:(userLoginOn) => {
              this.userLoginOn=userLoginOn;
            }
          }
        );*/
      }
}



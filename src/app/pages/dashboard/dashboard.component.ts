import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { User } from 'src/app/services/auth/user';
import { RegisterService } from 'src/app/services/auth/register.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
  userLoginOn:boolean=false;
  userData?:User;
  constructor(private loginService:LoginService, private registerService:RegisterService) { }

    ngOnInit(): void {
      this.loginService.currentUserLoginOn.subscribe(
        {
          next:(userLoginOn) => {
            this.userLoginOn=userLoginOn;
          }
        }
      );
        this.loginService.currentUserData.subscribe(
          {
            next:(userData) => {
              this.userData=userData;
            }
          }
        )
      
       /* this.registerService.currentUserRegister.subscribe(
          {
            next:(userLoginOn) => {
              this.userLoginOn=userLoginOn;
            }
          }
        );
          this.registerService.currentUserData.subscribe(
            {
              next:(userData) => {
                this.userData=userData;
              }
            }
          )*/
    }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { User } from 'src/app/services/auth/user';
import { RegisterService } from 'src/app/services/auth/register.service';

@Component({
  selector: 'app-account-delete',
  templateUrl: './account-delete.component.html',
  styleUrls: ['./account-delete.component.css']
})
export class AccountDeleteComponent implements OnInit{
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
}
}

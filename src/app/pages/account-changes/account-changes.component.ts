import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/auth/user';
import { LoginService } from 'src/app/services/auth/login.service';
import { RegisterService } from 'src/app/services/auth/register.service';

@Component({
  selector: 'app-account-changes',
  templateUrl: './account-changes.component.html',
  styleUrls: ['./account-changes.component.css']
})
export class AccountChangesComponent implements OnInit {
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
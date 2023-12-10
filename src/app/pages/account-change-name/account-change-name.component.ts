import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/services/auth/registerRequest';
import { ModifyNameService } from 'src/app/services/auth/modify-name.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/services/auth/user';

@Component({
  selector: 'app-account-change-name',
  templateUrl: './account-change-name.component.html',
  styleUrls: ['./account-change-name.component.css']
})
export class AccountChangeNameComponent implements OnInit {
  changeError:string="";
  changeForm=this.formBuilder.group({
    name:['',Validators.required],
    lastName:['',Validators.required]
  })

  constructor(private formBuilder:FormBuilder, private router:Router, private modifyNameService:ModifyNameService, private http:HttpClient) { }
  
  ngOnInit(): void {
  }
  

  get name(){
    return this.changeForm.controls.name
  }

  get lastName(){
    return this.changeForm.controls.lastName
  }

  

  change(){
    const fd = new FormData();
    const user: User = {
      name: this.changeForm.get('name')?.value,
      lastName: this.changeForm.get('lastName')?.value,
    }
    this.http.patch<User>('http://localhost:8080/api/users', user )
.subscribe(res => {
  console.log(res);
})
}
}

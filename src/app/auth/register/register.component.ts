import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/services/auth/registerRequest';
import { RegisterService } from 'src/app/services/auth/register.service';
import { User } from 'src/app/services/auth/user';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerError:string="";
  registerForm=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required],
    name:['',Validators.required],
    lastName:['',Validators.required]
  })
user: any;

  constructor(private formBuilder:FormBuilder, private router:Router, private registerService:RegisterService, private http:HttpClient) { }
  ngOnInit(): void {
    /*this.register()*/
  }
  
  get email(){
    return this.registerForm.controls.email;
  }

  get password(){
    return this.registerForm.controls.password;
  }

  get name(){
    return this.registerForm.controls.name
  }

  get lastName(){
    return this.registerForm.controls.lastName
  }

  

  register(){
    const fd = new FormData();
    const user: User = {
      name: this.registerForm.get('name')?.value,
      lastName: this.registerForm.get('lastName')?.value,
      email: this.registerForm.get('email')?.value,
      /*password:this.registerForm.get('password')?.value*/
    }
    this.http.post<User>('http://localhost:8080/api/users', user )
.subscribe(res => {
  console.log(res);
})
}
  }


  

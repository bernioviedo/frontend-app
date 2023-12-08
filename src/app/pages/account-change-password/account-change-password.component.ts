import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/services/auth/registerRequest';
import { RegisterService } from 'src/app/services/auth/register.service';
import { User } from 'src/app/services/auth/user';


@Component({
  selector: 'app-account-change-password',
  templateUrl: './account-change-password.component.html',
  styleUrls: ['./account-change-password.component.css']
})
export class AccountChangePasswordComponent implements OnInit {
  registerError:string="";
  registerForm=this.formBuilder.group({
    password:['',Validators.required],    
  })

  constructor(private formBuilder:FormBuilder, private router:Router, private registerService:RegisterService) { }
  
  ngOnInit(): void {
    this.register()
  }

  get password(){
    return this.registerForm.controls.password;
  }

  register(){
    const user: User = {
      name: this.registerForm.get('nombre')?.value,
      lastName: this.registerForm.get('apellido')?.value,
      email: this.registerForm.get('mail')!.value
    }
  }
}

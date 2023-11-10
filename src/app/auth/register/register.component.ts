import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/services/auth/registerRequest';
import { RegisterService } from 'src/app/services/auth/register.service';


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

  constructor(private formBuilder:FormBuilder, private router:Router, private registerService:RegisterService) { }
  
  ngOnInit(): void {
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
    if(this.registerForm.valid){
      this.registerService.register(this.registerForm.value as RegisterRequest).subscribe({
        next:(userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.error(errorData);
          this.registerError=errorData;
        },
        complete: () => {
          console.info("Registro completo");
          this.router.navigateByUrl('/registro-exitoso');
          this.registerForm.reset();
        }
      })
    }
  }
}

  

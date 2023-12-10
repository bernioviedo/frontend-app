import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup;

  userService = inject(UserService);

 /* loginError:string="";
  loginForm=this.formBuilder.group({
    email:['', [Validators.required,Validators.email]],
    password:['', [Validators.required]],
  })*/
  constructor() {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
   }
  
   async onSubmit() {
    const response = await this.userService.login(this.formulario.value);
    console.log(response);
   }
 /* ngOnInit(): void {
  }

  get email(){
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  login(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next:(userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError=errorData;
        },
        complete: () => {
          console.info("Login completo");
          this.router.navigateByUrl('/pag-principal');
          this.loginForm.reset();
        }
      })

    }
    else{
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos");
    }
  }
*/
}

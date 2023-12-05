import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/services/auth/registerRequest';
import { ModifyNameService } from 'src/app/services/auth/modify-name.service';

@Component({
  selector: 'app-account-change-name',
  templateUrl: './account-change-name.component.html',
  styleUrls: ['./account-change-name.component.css']
})
export class AccountChangeNameComponent implements OnInit {
  registerError:string="";
  registerForm=this.formBuilder.group({
    name:['',Validators.required],
    lastName:['',Validators.required]
  })

  constructor(private formBuilder:FormBuilder, private router:Router, private modifyNameService:ModifyNameService) { }
  
  ngOnInit(): void {
  }
  

  get name(){
    return this.registerForm.controls.name
  }

  get lastName(){
    return this.registerForm.controls.lastName
  }

  

  register(){
    if(this.registerForm.valid){
      this.modifyNameService.register(this.registerForm.value as RegisterRequest).subscribe({
        next:(userData: any) => {
          console.log(userData);
        },
        error: (errorData: string) => {
          console.error(errorData);
          this.registerError=errorData;
        },
        complete: () => {
          console.info("Registro completo");
          this.router.navigateByUrl('/inicio');
          this.registerForm.reset();
        }
      })
    }
  }
}

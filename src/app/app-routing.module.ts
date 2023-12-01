import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RegistersuccessComponent } from './pages/registersuccess/registersuccess.component';
import { PagPrincipalComponent } from './pages/pag-principal/pag-principal.component';
import { AccountComponent } from './pages/account/account.component';
import { CerrarSesionComponent } from './pages/cerrar-sesion/cerrar-sesion.component';
import { FieldsComponent } from './pages/fields/fields.component';
import { FieldBookingComponent } from './pages/field-booking/field-booking.component';
import { AccountChangesComponent } from './pages/account-changes/account-changes.component';
import { AccountChangeNameComponent } from './pages/account-change-name/account-change-name.component';
import { AccountChangePasswordComponent } from './pages/account-change-password/account-change-password.component';
import { AccountDeleteComponent } from './pages/account-delete/account-delete.component';

const routes: Routes = [
  {path:'',redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio',component:DashboardComponent},
  {path:'iniciar-sesion',component:LoginComponent},
  {path:'registro',component:RegisterComponent},
  {path:'registro-exitoso',component:RegistersuccessComponent},
  {path:'pag-principal',component:PagPrincipalComponent},
  {path:'cuenta',component:AccountComponent},
  {path:'cerrar-sesion',component:CerrarSesionComponent},
  {path:'canchas',component:FieldsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { NavComponent } from './shared/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './auth/register/register.component';
import { RegistersuccessComponent } from './pages/registersuccess/registersuccess.component';
import { PagPrincipalComponent } from './pages/pag-principal/pag-principal.component';
import { AccountComponent } from './pages/account/account.component';
import { CerrarSesionComponent } from './pages/cerrar-sesion/cerrar-sesion.component';
import { FieldsComponent } from './pages/fields/fields.component';
import { FieldBookingComponent } from './pages/field-booking/field-booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AccountChangesComponent } from './pages/account-changes/account-changes.component';
import { AccountChangeNameComponent } from './pages/account-change-name/account-change-name.component';
import { AccountChangePasswordComponent } from './pages/account-change-password/account-change-password.component';
import { AccountDeleteComponent } from './pages/account-delete/account-delete.component';
import { AddFieldsComponent } from './pages/add-fields/add-fields.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    NavComponent,
    RegisterComponent,
    RegistersuccessComponent,
    PagPrincipalComponent,
    AccountComponent,
    CerrarSesionComponent,
    FieldsComponent,
    FieldBookingComponent,
    AccountChangesComponent,
    AccountChangeNameComponent,
    AccountChangePasswordComponent,
    AccountDeleteComponent,
    AddFieldsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

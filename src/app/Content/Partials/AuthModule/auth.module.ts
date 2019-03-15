import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";



import { LoginComponent } from './Login/login.component';
import { RegisterUserComponent } from './SignUp/register-user.component';
import { RecoverPasswordComponent } from './ForgotPassword/recover-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterUserComponent,
    RecoverPasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }

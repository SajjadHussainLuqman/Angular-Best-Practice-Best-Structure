import { Routes } from '@angular/router';

import { LoginComponent } from './Login/login.component';
import { RegisterUserComponent } from './SignUp/register-user.component';
import { RecoverPasswordComponent } from './ForgotPassword/recover-password.component';

export const routesAuthModule: Routes = [
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterUserComponent },
  { path:'recoverpassword', component:RecoverPasswordComponent }
];


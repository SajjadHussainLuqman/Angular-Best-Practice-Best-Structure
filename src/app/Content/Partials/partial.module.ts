import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthModule } from './AuthModule/auth.module';
import { ErrorPagesModuleModule } from "./ErrorPagesModule/error-pages.module";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AuthModule,
    ErrorPagesModuleModule
  ]
})

export class PartialModule { }

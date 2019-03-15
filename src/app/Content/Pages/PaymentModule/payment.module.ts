import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms"; 

import { PaymentRoutingModule } from "./payment-routing.module";

import { ListComponent } from './Users/List/list.component';
import { ManageComponent } from './Users/Manage/manage.component';
import { EmployerListComponent } from './Employers/List/employer-list.component';
import { EmployerManageComponent } from './Employers/Manage/employer-manage.component';

@NgModule({
  declarations: [
    ListComponent,
    ManageComponent,
    EmployerListComponent,
    EmployerManageComponent,
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    ReactiveFormsModule
  ]
})
export class PaymentModule { }

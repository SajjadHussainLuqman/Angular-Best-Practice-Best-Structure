import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './Users/List/list.component';
import { ManageComponent } from './Users/Manage/manage.component';

import { EmployerListComponent } from './Employers/List/employer-list.component';
import { EmployerManageComponent } from './Employers/Manage/employer-manage.component';

const routes : Routes = [
  { path: 'users' , component : ListComponent },
  { path: 'usermanage' , component : ManageComponent },
  { path: 'usermanage/:id' , component : ManageComponent },
  { path: 'employers' , component : EmployerListComponent },
  { path: 'employermanage' , component : EmployerManageComponent },
  { path: 'employermanage/:id' , component : EmployerManageComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PaymentRoutingModule { }

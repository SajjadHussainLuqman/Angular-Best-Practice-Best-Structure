import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserReportComponent } from './user-report/user-report.component';

export const routes: Routes = [
  { path : 'userreport', component : UserReportComponent}
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class ReportingRoutingModule { }

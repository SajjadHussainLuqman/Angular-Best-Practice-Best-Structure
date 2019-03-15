import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportingRoutingModule } from "./reporting-routing.module";

import { UserReportComponent } from './user-report/user-report.component';


@NgModule({
  declarations: [
    UserReportComponent,
  ],
  imports: [
    CommonModule,
    ReportingRoutingModule
  ]
})
export class ReportingModule { }

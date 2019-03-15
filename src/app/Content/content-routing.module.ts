import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterComponent,DashboardComponent } from './Layout/index';

import { AuthGuard } from "../Core/Security/index";
import { routesAuthModule,routesErrorPagesModule } from "./Partials/index";

const routes: Routes = [
  { path: 'admin', redirectTo: '/', pathMatch: 'full' },
  {
    path: '', component: MasterComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'payment', loadChildren : "./Pages/PaymentModule/payment.module#PaymentModule" },
      { path: 'reporting', loadChildren : "./Pages/ReportingModule/reporting.module#ReportingModule"}
    ]
  },
  ...routesAuthModule,
  ...routesErrorPagesModule,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContentRoutingModule { }

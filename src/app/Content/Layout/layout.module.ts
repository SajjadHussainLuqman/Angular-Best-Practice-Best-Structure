import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './Footer/footer.component';
import { MasterComponent } from './MasterPage/master.component';
import { MainMenuComponent } from './Menu/main-menu.component';
import { DashboardComponent } from '../../Content/Layout/Dashboard/dashboard.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainMenuComponent,
    MasterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    HeaderComponent
  ]
})
export class LayoutModule { }

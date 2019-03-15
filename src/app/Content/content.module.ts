import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from "./content-routing.module";

import { PartialModule } from './Partials/partial.module';
import { LayoutModule } from './Layout/index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  
    ContentRoutingModule,
    
		PartialModule,
    LayoutModule
  ],
  exports : [
    LayoutModule
  ]
})
export class ContentModule { }

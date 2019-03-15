import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalErrorComponent } from "./InternalError/internal-error.component";
import { PageNotFoundComponent } from "./PageNotFound/page-not-found.component";
import { UnderConstructionComponent } from "./UnderConstruction/under-construction.component";

@NgModule({
  declarations: [
    InternalErrorComponent,
    PageNotFoundComponent,
    UnderConstructionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ErrorPagesModuleModule { }

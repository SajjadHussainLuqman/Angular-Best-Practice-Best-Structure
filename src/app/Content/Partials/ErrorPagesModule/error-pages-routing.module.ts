
import { Routes } from '@angular/router';

import { InternalErrorComponent } from "./InternalError/internal-error.component";
import { PageNotFoundComponent } from "./PageNotFound/page-not-found.component";
import { UnderConstructionComponent } from "./UnderConstruction/under-construction.component";

export const routesErrorPagesModule: Routes = [
  { path:'internalerror', component:InternalErrorComponent },
  { path:'underconstruction', component:UnderConstructionComponent },
  { path:'404', component: PageNotFoundComponent },
  { path:'**', redirectTo : '/404' },
];


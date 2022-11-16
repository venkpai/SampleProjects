import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CustomerComponent} from './Customer/Customer.component';
import {CompanyComponent} from './company/company.component';


const routes: Routes = [
{path:'Customer',component:CustomerComponent},
{path:'company',component:CompanyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

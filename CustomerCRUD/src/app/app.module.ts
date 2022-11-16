import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { ShowComComponent } from './company/show-com/show-com.component';
import { AddEditComComponent } from './company/add-edit-com/add-edit-com.component';
import { CustomerComponent } from './Customer/Customer.component';
import { ShowCustComponent } from './Customer/show-cust/show-cust.component';
import { AddEditCustComponent } from './Customer/add-edit-cust/add-edit-cust.component';
import{SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    ShowComComponent,
    AddEditComComponent,
    CustomerComponent,
    ShowCustComponent,
    AddEditCustComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

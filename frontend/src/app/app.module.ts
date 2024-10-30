import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { BuyRechargeComponent } from './components/buy-recharge/buy-recharge.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuppliersComponent,
    BuyRechargeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

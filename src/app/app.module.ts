import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductTypeComponent} from './component/productType/productType.component';
import {SignInComponent} from './component/authentication/sign-in/sign-in.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {ProductComponent} from './component/product/product.component';
import {SignUpComponent} from './component/authentication/sign-up/sign-up.component';
import {CartComponent} from './component/cart/cart.component';
import {WorkerComponent} from './component/worker/worker.component';
import {AuthInterceptor} from "./service/AuthInterceptor";
import { UserComponent } from './component/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import { HomeComponent } from './component/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductTypeComponent,
    SignInComponent,
    NavbarComponent,
    ProductComponent,
    SignUpComponent,
    CartComponent,
    WorkerComponent,
    UserComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

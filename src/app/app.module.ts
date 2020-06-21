import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductTypeComponent} from './component/productType/productType.component';
import {SignInComponent} from './component/authentication/sign-in/sign-in.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {ProductComponent} from './component/product/product.component';
import {SignUpComponent} from './component/authentication/sign-up/sign-up.component';
import {CartComponent} from './component/cart/cart.component';
import {WorkerComponent} from './component/worker/worker.component';
import {AuthInterceptor} from "./service/authInterceptor";
import {UserComponent} from './component/user/user.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {MatRadioModule} from '@angular/material/radio';
import {HomeComponent} from './component/home/home.component';
import {UsernameValidatorComponent} from './component/username-validator/username-validator.component';
import {AdminPageComponent} from './component/admin-page/admin-page.component';
import {MatTableModule} from "@angular/material/table";
import {FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from "angularx-social-login";


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
    UsernameValidatorComponent,
    AdminPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatRadioModule,
    MatTableModule,
    SocialLoginModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('260501941721601'),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


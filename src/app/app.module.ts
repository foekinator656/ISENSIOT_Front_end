import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginFormComponent } from './login/login-form/login-form.component';
import { FormsModule } from "@angular/forms";
import { LoginService } from "./login/login.service";
import { LoginComponent } from './login/login.component';
import { RegistrationFormComponent } from './login/registration-form/registration-form.component';
import {AppRoutingModule} from "./app.routes";

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginComponent,
    RegistrationFormComponent,
  ],
  imports: [
    AppComponent,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

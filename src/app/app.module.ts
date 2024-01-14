import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ApiInterceptorService } from "./shared/services/api-interceptor.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from "./user/user.module";
import { SharedModule } from "./shared/shared.module";
import { HomeModule } from "./home/home.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GraphModule } from "./graph/graph.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UserModule,
    SharedModule,
    HomeModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    GraphModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

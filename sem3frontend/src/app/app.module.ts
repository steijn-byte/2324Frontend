import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';

import { NavbarComponent } from './navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptorService } from './Authentication/jwt-interceptor.service';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChatComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

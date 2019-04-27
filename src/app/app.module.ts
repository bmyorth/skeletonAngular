import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_components/login/login.component';
import { HomeComponent } from './_components/home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {
    MatButtonModule,
    MatCardModule, MatChipsModule, MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule, MatMenuModule, MatProgressBarModule,
    MatSidenavModule, MatSlideToggleModule, MatStepperModule, MatToolbarModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthenticationService, NavigationService} from "./_services";
import {JwtInterceptor} from "./_helpers/jwt.interceptor";
import { LayoutModule } from '@angular/cdk/layout';
import {NgxSpinnerModule} from "ngx-spinner";
import {ErrorInterceptor} from "./_helpers/error.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatMenuModule,
    MatStepperModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatChipsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    NgxSpinnerModule,
  ],
  providers: [AuthenticationService,NavigationService,
              { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
              { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AgGridModule} from "ag-grid-angular";
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import { AlertComponent } from './shared/alert/alert.component';
import { LoginComponent } from './component/login/login.component';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import {NgxSpinnerModule} from "ngx-spinner";
import { AngularNotificationModule} from 'angular-notification-alert';
import { NotificationsAlertComponent } from './component/notifications-alert/notifications-alert.component';
import { HeaderComponent } from './component/header/header.component';
import { FotterComponent } from './component/fotter/fotter.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    CreateUserComponent,
    UserDetailsComponent,
    NotificationsAlertComponent,
    HeaderComponent,
    FotterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxSpinnerModule,
    AngularNotificationModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDetailsComponent } from './cars/car-details/car-details.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarsComponent } from './cars/cars.component';
import { CarsService } from './services/cars.services';
import { RegisterComponent } from './register/register.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ListCarComponent } from './list-car/list-car.component';
import { AgmCoreModule } from '@agm/core';
import { NpnSliderModule } from "npn-slider";
import { AuthenticationService } from './services/authentication.services';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { FileService } from './services/files.service';
import { FilterPipe } from './filter.pipe';
import { MoneyPipe } from './money.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarsComponent,
    RegisterComponent,
    CarDetailsComponent,
    ListCarComponent,
    LoginPageComponent,
    AccountSettingsComponent,
    FilterPipe,
    MoneyPipe,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBxImSYeJl1s7poHFAufKoeuJ6jrdQbPZo',
      libraries :["places"]
    }),
    NpnSliderModule,
    NgbModule
  ],
  providers: [CarsService, UsersService, AuthenticationService, FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }

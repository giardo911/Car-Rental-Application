import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarsComponent } from './cars/cars.component';
import { CarsService } from './services/cars.services';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarsComponent,
    RegisterComponent,
    CarDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

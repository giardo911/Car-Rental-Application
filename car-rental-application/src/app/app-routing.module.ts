import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { RegisterComponent } from './register/register.component';
import {CarDetailsComponent} from './cars/car-details/car-details.component';
import { from } from 'rxjs';
import { LoginPageComponent } from './login-page/login-page.component';
const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'cars/:id', component: CarDetailsComponent},
  {path: 'login', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


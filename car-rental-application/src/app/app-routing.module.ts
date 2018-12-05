import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { RegisterComponent } from './register/register.component';
import {CarDetailsComponent} from './cars/car-details/car-details.component';
import { from } from 'rxjs';
import { ListCarComponent } from './list-car/list-car.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: '', component: LoginPageComponent},
 {path: 'cars', component: CarsComponent},
  {path: 'cars/:id', component: CarDetailsComponent},
  {path: 'listCar' , component: ListCarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'account-settings', component: AccountSettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


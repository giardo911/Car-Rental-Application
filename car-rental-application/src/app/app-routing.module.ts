import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarsComponent } from './cars/cars.component';

import { RegisterComponent } from './register/register.component';
import { from } from 'rxjs';
import { ListCarComponent } from './list-car/list-car.component';
const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeComponent},
 {path: 'cars', component: CarsComponent},
  {path: 'cars/:id', component: CarDetailsComponent},
  {path: 'listCar' , component: ListCarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


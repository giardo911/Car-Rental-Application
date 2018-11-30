import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { RegisterComponent } from './register/register.component';
import {CarDetailsComponent} from './cars/car-details/car-details.component';
import { from } from 'rxjs';
<<<<<<< HEAD
import { ListCarComponent } from './list-car/list-car.component';
const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeComponent},
 {path: 'cars', component: CarsComponent},
  {path: 'cars/:id', component: CarDetailsComponent},
  {path: 'listCar' , component: ListCarComponent}

=======
import { LoginPageComponent } from './login-page/login-page.component';
const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'cars/:id', component: CarDetailsComponent},
  {path: '', component: LoginPageComponent}
>>>>>>> 5b8bcc709094e2971b0f7b0301b3e476cd266be6
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


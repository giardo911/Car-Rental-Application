import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { CarsService } from '../services/cars.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private carService :CarsService,private route:Router) { }

  ngOnInit() {
  }
  onSignIn(form: NgForm) {
    const username = form.value.email;
    const user = this.carService.getUser(username);
    if (user.Password === form.value.password) {
        this.route.navigate(['/']);
      }
    else
    {
      this.route.navigate(['login']);
    }

  }
}

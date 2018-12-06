import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { CarsService } from '../services/cars.services';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { AuthenticationService } from '../services/authentication.services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private carService: CarsService, private route: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.logout();
  }
  onSignIn(form: NgForm) {
    const username = form.value.email;
    this.auth.login(username).then(
      data => {
        if (data.length > 0 && data[0].Password === form.value.password) {
          this.route.navigate(['home']);
        }
        else {
          this.route.navigate(['']);
        }

      }
    );


  }
}

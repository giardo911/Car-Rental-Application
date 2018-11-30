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
  }
  onSignIn(form: NgForm) {
    const username = form.value.email;
    console.log(username)
    this.auth.login(username).then(
      data => {
      console.log(JSON.stringify(data));
      console.log("First "+data[0].Password+"Second "+form.value.password)
      console.log(data.length > 0 && data[0].Password === form.value.password)
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

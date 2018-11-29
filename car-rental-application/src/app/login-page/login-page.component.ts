import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { CarsService } from '../services/cars.services';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private carService :CarsService,private route:Router, private userService:UsersService) { }

  ngOnInit() {
  }
  onSignIn(form: NgForm) {
    const username = form.value.email;
    const user= [];
    this.userService.getUser("Email="+username).then(
      data => {
      console.log(JSON.stringify(data));
        // console.log(data.length > 0);
        // console.log(data[0].Password === form.value.password);
        // console.log("First"+ data[0].Password+"Second"+form.value.password)
        if (data.length > 0 && data[0].Password === form.value.password)
        {
          this.route.navigate(['/']);
        }
        else
        {
          this.route.navigate(['login']);
        }
      }
    );


  }
}

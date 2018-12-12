import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { __await } from 'tslib';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;

    constructor(private Users: UsersService, private formBuilder: FormBuilder, private router : Router) { }


  states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
    'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
    'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming'
];


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address1: ['', [Validators.required]],
      address2: [],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      profPic: [],
      alerts: ['', [Validators.requiredTrue]]
  });
  }

  get f() { return this.registerForm.controls; }

  getUsers() {
    console.log('tect');
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
  }

    this.Users.getUsers();
  }



  async addUser() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log(this.registerForm.errors);
      console.log(this.registerForm.invalid);
      return;
  }
    console.log(this.registerForm.get('firstName').value);

    let user = {
      'FirstName': this.registerForm.get('firstName').value,
      'LastName': this.registerForm.get('lastName').value,
      'Email': this.registerForm.get('email').value,
      'Password': this.registerForm.get('password').value,
      'Address1': this.registerForm.get('address1').value,
      'Address2': this.registerForm.get('address2').value,
      'City': this.registerForm.get('city').value,
      'State': this.registerForm.get('state').value,
      'Zip': this.registerForm.get('zip').value,
      'Alerts': this.registerForm.get('alerts').value
    };
    /**
     * Add user
     */
    this.Users.getUser('Email=' + this.registerForm.get('email').value).then(
      data => {
      console.log(JSON.stringify(data));
        if (data.length > 0 )
        {
          console.log('User already exists');
          alert('User already exists with this Email address');
        }
        else
        {
          console.log('New user');
          this.Users.putUser(user);
          alert('Registration Successful');
          this.router.navigate(['/']);

        }
      }
    );







  }

}



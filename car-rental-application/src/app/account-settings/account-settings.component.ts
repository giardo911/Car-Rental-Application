import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;

    constructor(private Users: UsersService, private formBuilder: FormBuilder, private active : ActivatedRoute) { }

  userObj = {};

  states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
    'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
    'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming'
];

   userId = '5bfde6b4bfe07e93a0c6537f';



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
      alerts: ['', [Validators.requiredTrue]]
    });

    let id = this.active.snapshot.params['id'];
    console.log("ID::::;"+id);

    this.active.params.subscribe(
    (params) => {
      id = params['id'];
    })
    this.Users.getUserById(this.userId).then(

    data =>{
    console.log(data);
    this.userObj =data;
    this.populateUserDetails(this.userObj);
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


  populateUserDetails(user){
    console.log(user);


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
      'userId' : this.userId,
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


    this.Users.updateUser(user);
  }
}



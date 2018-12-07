import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CarsService } from '../services/cars.services';
import { JsonPipe } from '@angular/common';
import { FileService } from '../services/files.service';
@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.scss']
})
export class ListCarComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  file;
  filePath;
  user = JSON.parse(localStorage.currentUser);

  constructor( private formBuilder: FormBuilder, private carservice:CarsService, private Files: FileService) { }

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
      carName: ['', Validators.required],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      carPrice: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      carYear : ['', [Validators.required, Validators.pattern('[0-9]*')]],
      address2: ['', [Validators.required]],
      zip: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      alerts: ['', [Validators.required]],
      description:['',[Validators.required]],
      parkingDetails :['',[Validators.required]],
      features:['',[Validators.required]],
      dailyDistance: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      weeklyDistance:['', [Validators.required, Validators.pattern('[0-9]*')]],
      monthlyDistance:['', [Validators.required, Validators.pattern('[0-9]*')]],
      doors:['', [Validators.required, Validators.pattern('[0-9]*')]],
      seats : ['', [Validators.required, Validators.pattern('[0-9]*')]],
      milage : ['', [Validators.required,Validators.pattern('[0-9]*')]],
      fuelType : ['', [Validators.required]]
  });
  }

  get f() { return this.registerForm.controls; }

  addCar(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log(this.registerForm.errors);
      console.log(this.registerForm.invalid);
      return;


  }

  console.log(this.user[0]._id);
  this.Files.uploadFile(this.file, this.user[0]._id).then(

    data =>{
    this.filePath = data;
    alert(this.filePath);
    console.log(this.filePath);

    let car = {
      'carName':  this.registerForm.get('carName').value,
      'carYear':  this.registerForm.get('carYear').value,
      'userId' :  this.user[0]._id,
      'carImagePath':  this.filePath,

      'carPrice': this.registerForm.get('carPrice').value,
      'description':  this.registerForm.get('description').value,
      'features':  this.registerForm.get('features').value,
      'parkingDetails':  this.registerForm.get('parkingDetails').value,
      'guidelines':  'NO guidelines',
      'dailyDistance':  this.registerForm.get('dailyDistance').value,
      'weeklyDistance':  this.registerForm.get('weeklyDistance').value,
      'monthlyDistance':  this.registerForm.get('monthlyDistance').value,
      'milage':   this.registerForm.get('milage').value ,
      'fuelType':  this.registerForm.get('fuelType').value ,
      'doorCount':this.registerForm.get('doors').value ,
      'seatCount': this.registerForm.get('seats').value
    }
    this.carservice.putCar(car);
    alert("After Put");
});
}


  onFileUpload(event){
      this.file = event.target.files[0];
     console.log(this.file);

    }

}

import { Component, OnInit } from '@angular/core';
import {CarsService} from '../services/cars.services';
import { Router} from '@angular/router';


@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.scss']
})
export class MyCarsComponent implements OnInit {

  selcetedValue;
  cars = [];
  userId;
  constructor(private carsService: CarsService, private route: Router) { }

  ngOnInit() {

    this.userId = JSON.parse(localStorage.currentUser);
    console.log(this.userId[0]._id);
    this.carsService.getCarsforUser(this.userId[0]._id).then((data) => {
      console.log(JSON.stringify(data));
      this.cars = data as string [];
      console.log(this.cars);
   });
  }

}

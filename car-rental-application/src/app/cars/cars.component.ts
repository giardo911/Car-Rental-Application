import { Component, OnInit } from '@angular/core';
import {CarsService} from '../services/cars.services';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
   cars: {id: Number, carName: String, carImagePath: string, carTrips: Number, carPrice: Number}[] = [];
  constructor(private carsService: CarsService ) { }

  ngOnInit() {
    this.cars = this.carsService.getCars();
  }

}

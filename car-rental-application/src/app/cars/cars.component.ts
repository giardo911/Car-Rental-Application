import { Component, OnInit } from '@angular/core';
import {CarsService} from '../services/cars.services';
import { Router} from '@angular/router';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
   cars = [];
  constructor(private carsService: CarsService, private route: Router) { }

  ngOnInit() {
    
    this.carsService.getCars().then((data) => {
       console.log(JSON.stringify(data));
       this.cars = data as string [];
       console.log(this.cars)
    });

  }

}

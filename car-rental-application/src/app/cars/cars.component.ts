import { Component, OnInit } from '@angular/core';
import {CarsService} from '../services/cars.services';
import { Router} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
   filters = ['Color', 'seatCount', 'carYear'];
   filterString;
   selcetedValue;
   currentValues = [0, 0];
   currentValues2 = [2000, 3500];
   cars = [];
   closeResult : string;
  constructor(private carsService: CarsService, private route: Router, private modalService: NgbModal) { }

  ngOnInit() {

    this.carsService.getCars().then((data) => {
       console.log(JSON.stringify(data));
       this.cars = data as string [];
       console.log(this.cars);
    });

  }
  onSliderChange(selectedValues: number[]) {
    console.log(selectedValues);
    this.currentValues = selectedValues;
}

onSubmit(f:NgForm){
  console.log(f.value.from)
}
}

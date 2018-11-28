import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.services';
import { ActivatedRoute } from '@angular/router';
import {FormGroup} from '@angular/forms'
@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

private carObj ;
 
  latitude = 51.678418;
longitude = 7.809007;
 registerForm :FormGroup;
private startDate : Date;

endDate;
startTime;
endTime;
private price: number = 100;
private carName: string = 'Mazda';
private doorCount: string = 'Mazda';
private seatCount: string = 'Mazda';
private fuelType: string = 'Mazda';
private milage: string = 'Mazda';
private description: string = 'Mazda';
private features: string = 'Mazda';
private parkingDetails: string = 'Mazda';
private guideLines: string = 'Mazda';
private dailyDistance: number = 100;
private weeklyDistance: number = 100;
private monthlyDistance: number = 100;
private ownerName : string ="Mr. Iyer" ;
private carYear :string ;
private imgPath : string;
private carImages =[];
constructor(private carservice:  CarsService,private active : ActivatedRoute) { 



  }

  ngOnInit() {
let id =+ this.active.snapshot.params['id'];
    console.log("ID::::;"+id);
    


this.active.params.subscribe(
  (params) => { 
   id =+ params['id'];
  }
)
this.carObj= this.carservice.getCar(id);
console.log("carNmae::::"+this.carObj.carName);

this.populateCarsDetails(this.carObj);

}



populateCarsDetails(carObj){
console.log("abc");


this.price = carObj.carPrice;
this.carName =carObj.carName;
this.carYear = carObj.carYear;
this.imgPath =carObj.carImagePath;
console.log("Car:::::::"+this.carName);
this.description = carObj.description;
this.milage = carObj.milage
this.fuelType = carObj.fuelType
this.features = carObj.features
this.parkingDetails = carObj.parkingDetails
this.guideLines =carObj.guideLines
this.dailyDistance = carObj.dailyDistance
this.weeklyDistance = carObj.weeklyDistance
this.monthlyDistance = carObj.monthlyDistance
this.ownerName = carObj.ownerName
this.doorCount  = carObj.doorCount
this.seatCount = carObj.seatCount
this.carImages =[this.imgPath,'assets/images/car10.png','assets/images/car12.png' ]
}
 

onCheckout(f){
console.log("in checkout ::::::");
console.log("Date:::::::::::::::::::::"+f.startDate.value);







  }

}

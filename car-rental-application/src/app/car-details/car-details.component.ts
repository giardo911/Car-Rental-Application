import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {


  latitude = 51.678418;
longitude = 7.809007;

private startDate : Date;

endDate;
startTime;
endTime;
private price: number = 100;
private carName: String = 'Mazda';


constructor() { 



  }

  ngOnInit() {



  }

  onCheckout(event){
console.log("in checkout ::::::"+event);
console.log("start Time:::"+this.startDate);




  }

}

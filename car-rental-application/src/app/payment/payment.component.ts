import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.services';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
 private userObj = {}
 private username
 private carId  =localStorage.carId
 private startDate =localStorage.startdate
 private endDate =localStorage.enddate
 private startTime =localStorage.startTime
 private endTime = localStorage.endTime 
private bookingprice  =localStorage.bookingPrice

 constructor(private carservice:CarsService) { }

  ngOnInit() {

    this.userObj = JSON.parse(localStorage.currentUser)
this.username = this.userObj['_id'];
  }


payment(){
  console.log("doing payment::::::");
  
 let payment ={
'userName' : this.username,
'carId' : this.carId,
'startDate' : this.startDate,
'endDate' : this.endDate, 
'bookingprice' : this.bookingprice

 }
 //this.carservice.doPayment(payment);


  }

}

import { Component, OnInit } from '@angular/core';

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

 constructor() { }

  ngOnInit() {

    this.userObj = JSON.parse(localStorage.currentUser)
this.username = this.userObj['_id'];
  }

}

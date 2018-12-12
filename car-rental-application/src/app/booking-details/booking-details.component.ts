import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingsService } from '../services/bookings.service';
import { UsersService } from '../services/users.service';
import { CarsService } from '../services/cars.services';


@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingConfirmComponent implements OnInit {

  bookingObj;
  bookingId;
  userObj;
  carObj;
  ownerObj;
  constructor(private active : ActivatedRoute, private route: Router, private booking: BookingsService, private user: UsersService, private car: CarsService) { }

  ngOnInit() {

    this.bookingId = this.active.snapshot.params['id'];
    console.log("ID::::;"+this.bookingId);
    this.active.params.subscribe(
      (params) => {
       this.bookingId = params['id'];
      }
    )

    if(!this.bookingId){
      alert("Please select a booking");
      this.route.navigate(['home']);

    }

    this.booking.getBooking(this.bookingId).then(
      data =>{
        this.bookingObj = data;
        console.log(this.bookingObj);
        this.car.getCar(this.bookingObj.carId).then(
          carData => {
            this.carObj = carData;
            this.user.getUserById(this.carObj.userId).then(
              ownerData => {
                this.ownerObj = ownerData;
              });
          });
          this.user.getUserById(this.bookingObj.userId).then(
            userData => {
              this.userObj = userData;
            });
      });

      console.log(this.userObj);



  }

}

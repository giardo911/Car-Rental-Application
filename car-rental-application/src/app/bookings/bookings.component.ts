import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../services/bookings.service';
import { CarsService } from '../services/cars.services';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  listBookings= [];
  booking= {};
  constructor(private bookings:BookingsService,private carsService:CarsService,private userService:UsersService) { }

  ngOnInit() {

    this.bookings.getBookings( JSON.parse(localStorage.currentUser)[0]._id).then((data) => {
      for( let booking of data as string[]){
        this.booking['id']= booking['_id'];
        this.booking['bookingDate'] =booking['created_date']
        this.booking['booking_startTime']=booking['booking_startTime'];
          this.booking['booking_endTime']=booking['booking_endTime'];
        this.carsService.getCar(booking['carId']).then((data) => {
          let car = data as string []
          this.booking['carName'] = car[0]['carName'];
          this.booking['carImagePath'] =car[0]['carImagePath'];

       });

       this.listBookings.push(this.booking);

      }
      console.log(this.listBookings.length);
   });
  }

}

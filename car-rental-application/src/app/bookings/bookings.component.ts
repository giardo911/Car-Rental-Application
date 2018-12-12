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
      console.log(data as string[]);
      for( let booking of data as string[]){
        console.log(booking);
        this.booking['id']= booking['_id'];
        this.booking['bookingDate'] =booking['created_date']
        this.booking['booking_startTime']=booking['booking_startTime'];
          this.booking['booking_endTime']=booking['booking_endTime'];
        this.carsService.getCar(booking['carId']).then(data => {
          let car = data as string []
          console.log(car);
          this.booking['carName'] = car['carName'];
          this.booking['carImagePath'] =car['carImagePath'];
          this.listBookings.push(booking);

       });


      }
      console.log(this.listBookings);
   });
  }

}

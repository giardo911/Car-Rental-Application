import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-booking-confirm',
  templateUrl: './booking-confirm.component.html',
  styleUrls: ['./booking-confirm.component.scss']
})
export class BookingConfirmComponent implements OnInit {

  bookingId;
  constructor(private active : ActivatedRoute, private route: Router) { }

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
  }

}

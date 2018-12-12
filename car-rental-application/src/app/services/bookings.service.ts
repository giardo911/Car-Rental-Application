import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookingsService {

  constructor(private httpClient:HttpClient) { }

  getBookings(query) {
    let promise = new Promise((resolve, reject) => {

      this.httpClient.get('http://localhost:3000/bookings?userId='+ query).subscribe(

        (data) => {
          console.log(data);
          resolve(data);

        },
        (err) => {
          reject(err);
        }

      );


    });
    return promise;


  }
  getcarsbydate(query1,query2) {
    let promise = new Promise((resolve, reject) => {

      this.httpClient.get("http://localhost:3000/bookings?startTime="+query1+"&endTime="+ query2).subscribe(

        (data) => {
          console.log(data);
          resolve(data);

        },
        (err) => {
          reject(err);
        }

      );


    });
    return promise;


  }

  updateBooking(input,id){
    let params = {};
    if(input.ownerRating){
      params = {"ownerRating" : input.ownerRating}
    }
    if(input.userRating){
      params = {"userRating" : input.userRating}
    }
    let promise = new Promise((resolve, reject) => {

      this.httpClient.put('http://localhost:3000/bookings/' + id,
      params)
      .subscribe(
          data => {
              resolve(data);
              console.log('PUT Request is successful ', data);
          },
          error => {
              console.log('Error', error);
          }
      );
    });
    return promise;
  }

  getBookingByCar(query){
    let promise = new Promise((resolve, reject) => {

      this.httpClient.get('http://localhost:3000/bookings?carId=' + query).subscribe(

        (data) => {
          console.log(data);
          resolve(data);
        },
        (err) => {
          reject(err);
        });
    });
    return promise;
  }


  getBooking(query) {
    let promise = new Promise((resolve, reject) => {

      this.httpClient.get('http://localhost:3000/bookings/' + query).subscribe(

        (data) => {
          console.log(data);
          resolve(data);

        },
        (err) => {
          reject(err);
        });
    });
    return promise;


  }
}

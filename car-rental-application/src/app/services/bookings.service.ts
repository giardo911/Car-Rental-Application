import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookingsService {

  constructor(private httpClient:HttpClient) { }
  /**
   *
   * @param query
   * Method to get bookings
   */
  getBookings(query) {
    let promise = new Promise((resolve, reject) => {

      this.httpClient.get('http://localhost:3000/bookings?userId='+ query).subscribe(

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
<<<<<<< HEAD
  /**
   *
   * @param query1
   * @param query2
   *
   * get booking by dates
   */
=======

  //Get all bookings within a  date range
>>>>>>> 633f8a3f7814bda39d9b29c1e4cdbb4ba0368d12
  getcarsbydate(query1,query2) {
    let promise = new Promise((resolve, reject) => {

      this.httpClient.get("http://localhost:3000/bookings?startTime="+query1+"&endTime="+ query2).subscribe(

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

  //Update booking details on DB based on input paramaters
  updateBooking(input,id){
    let params = {};
    console.log(input);
    if(input.ownerRating){
      params = {"ownerRating" : input.ownerRating}
    }
    if(input.userRating){
      params = {"userRating" : input.userRating}
    }
    if(input.active == 0){
      console.log(input.active);
      params = {"isActive" : false}
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

  //Get all bookings for a particular car
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
<<<<<<< HEAD
/**
 *
 * @param query Get A booking
 */
=======


  //Ger particular using bookingID
>>>>>>> 633f8a3f7814bda39d9b29c1e4cdbb4ba0368d12
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

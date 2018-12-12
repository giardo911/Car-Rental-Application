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
        }

      );


    });
    return promise;


  }
  /**
   *
   * @param query1
   * @param query2
   *
   * get booking by dates
   */
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
/**
 *
 * @param query Get A booking
 */
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

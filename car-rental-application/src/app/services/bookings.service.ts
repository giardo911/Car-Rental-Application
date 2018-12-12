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
}

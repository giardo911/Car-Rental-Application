import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class CarsService {
  constructor(private httpClient : HttpClient){

  }
  private cars = [
    {
      id : 1,
      carName: 'Honda CRV',
      carYear: '2013',
      carImagePath: '../../assets/images/HomePageBackround.jpg',
      carTrips: 217,
       carPrice: 38,
       description: 'A note on over-mileage:  I am absolutely willing to work with you on miles.  I give good discounts for over-mileage to good renters who upload the required photos and follow the directions, and inform me about the overmileage  Just ask me!  Thanks' ,
       features: 'Good sound system (no aux jack though).  Get out those old CDs!  Nice for long trips as well as errands and it lives for Ikea runs.  Has 2 12V outlets and I have included a 5v USB charger in the front',
       parkingDetails: 'Parked on the street at 128 Morris st.  Park on the street, NOT in the lot.  Even though SF is not easy, where it is parked in SOMA there are spots on morris most days day in the afternoon and evenings are no problem at all.  The only exception is Monday night because of street sweeping',
       guidelines: 'I do remote key handoff.  I will require your drivers license and photo per Turo terms - https://support.turo.com/hc/en-us/articles/115001847347-How-do-remote-key-handoffs-work-  Also I ask that you photograph the odometer before and after your trip and let me know if you went over mileage.  I am flexible with mileage but we have to discuss it first.  I keep my prices low this way.  Thanks!',
       dailyDistance: 80,
       weeklyDistance: 550,
       monthlyDistance:1500,
       ownerName: 'Mr. Sapte',
       milage: '24 MPG' ,
       fuelType: 'Gas(Premium)' ,
       doorCount: '4',
       seatCount: '4',

    },
    {
      id : 2,
      carName: 'Honda CRV',
      carYear: '2014',
      carImagePath: '../../assets/images/HomePageBackround.jpg',
      carTrips: 317,
      carPrice: 34,
      description: 'A note on over-mileage:  I am absolutely willing to work with you on miles.  I give good discounts for over-mileage to good renters who upload the required photos and follow the directions, and inform me about the overmileage  Just ask me!  Thanks' ,
      features: 'Good sound system (no aux jack though).  Get out those old CDs!  Nice for long trips as well as errands and it lives for Ikea runs.  Has 2 12V outlets and I have included a 5v USB charger in the front',
      parkingDetails: 'Parked on the street at 128 Morris st.  Park on the street, NOT in the lot.  Even though SF is not easy, where it is parked in SOMA there are spots on morris most days day in the afternoon and evenings are no problem at all.  The only exception is Monday night because of street sweeping',
      guidelines: 'I do remote key handoff.  I will require your drivers license and photo per Turo terms - https://support.turo.com/hc/en-us/articles/115001847347-How-do-remote-key-handoffs-work-  Also I ask that you photograph the odometer before and after your trip and let me know if you went over mileage.  I am flexible with mileage but we have to discuss it first.  I keep my prices low this way.  Thanks!',
      dailyDistance: 80,
      weeklyDistance: 550,
      monthlyDistance:1500,
      ownerName: 'Mr. Sapte',
      milage: '24 MPG' ,
      fuelType: 'Gas(Premium)' ,
      doorCount: '4',
      seatCount: '4',
    },
    {
      id : 3,
      carName: 'Lamborgini',
      carYear: '2004',
      carImagePath: '../../assets/images/HomePageBackround.jpg',
      carTrips: 315,
      carPrice: 54,
      description: 'A note on over-mileage:  I am absolutely willing to work with you on miles.  I give good discounts for over-mileage to good renters who upload the required photos and follow the directions, and inform me about the overmileage  Just ask me!  Thanks' ,
      features: 'Good sound system (no aux jack though).  Get out those old CDs!  Nice for long trips as well as errands and it lives for Ikea runs.  Has 2 12V outlets and I have included a 5v USB charger in the front',
      parkingDetails: 'Parked on the street at 128 Morris st.  Park on the street, NOT in the lot.  Even though SF is not easy, where it is parked in SOMA there are spots on morris most days day in the afternoon and evenings are no problem at all.  The only exception is Monday night because of street sweeping',
      guidelines: 'I do remote key handoff.  I will require your drivers license and photo per Turo terms - https://support.turo.com/hc/en-us/articles/115001847347-How-do-remote-key-handoffs-work-  Also I ask that you photograph the odometer before and after your trip and let me know if you went over mileage.  I am flexible with mileage but we have to discuss it first.  I keep my prices low this way.  Thanks!',
      dailyDistance: 80,
      weeklyDistance: 550,
      monthlyDistance:1500,
      ownerName: 'Mr. Sapte',
      milage: '24 MPG' ,
      fuelType: 'Gas(Premium)' ,
      doorCount: '4',
      seatCount: '4',
    },
    {
      id : 3,
      carName: 'Lamborgini',
      carYear: '2004',
      carImagePath: '../../assets/images/HomePageBackround.jpg',
      carTrips: 315,
      carPrice: 54,
      description: 'A note on over-mileage:  I am absolutely willing to work with you on miles.  I give good discounts for over-mileage to good renters who upload the required photos and follow the directions, and inform me about the overmileage  Just ask me!  Thanks' ,
      features: 'Good sound system (no aux jack though).  Get out those old CDs!  Nice for long trips as well as errands and it lives for Ikea runs.  Has 2 12V outlets and I have included a 5v USB charger in the front',
      parkingDetails: 'Parked on the street at 128 Morris st.  Park on the street, NOT in the lot.  Even though SF is not easy, where it is parked in SOMA there are spots on morris most days day in the afternoon and evenings are no problem at all.  The only exception is Monday night because of street sweeping',
      guidelines: 'I do remote key handoff.  I will require your drivers license and photo per Turo terms - https://support.turo.com/hc/en-us/articles/115001847347-How-do-remote-key-handoffs-work-  Also I ask that you photograph the odometer before and after your trip and let me know if you went over mileage.  I am flexible with mileage but we have to discuss it first.  I keep my prices low this way.  Thanks!',
      dailyDistance: 80,
      weeklyDistance: 550,
      monthlyDistance:1500,
      ownerName: 'Mr. Sapte',
      milage: '24 MPG' ,
      fuelType: 'Gas(Premium)' ,
      doorCount: '4',
      seatCount: '4',
    },
    {
      id : 3,
      carName: 'Lamborgini',
      carYear: '2004',
      carImagePath: '../../assets/images/car.jpg',
      carTrips: 315,
      carPrice: 80,
      description: 'A note on over-mileage:  I am absolutely willing to work with you on miles.  I give good discounts for over-mileage to good renters who upload the required photos and follow the directions, and inform me about the overmileage  Just ask me!  Thanks' ,
      features: 'Good sound system (no aux jack though).  Get out those old CDs!  Nice for long trips as well as errands and it lives for Ikea runs.  Has 2 12V outlets and I have included a 5v USB charger in the front',
      parkingDetails: 'Parked on the street at 128 Morris st.  Park on the street, NOT in the lot.  Even though SF is not easy, where it is parked in SOMA there are spots on morris most days day in the afternoon and evenings are no problem at all.  The only exception is Monday night because of street sweeping',
      guidelines: 'I do remote key handoff.  I will require your drivers license and photo per Turo terms - https://support.turo.com/hc/en-us/articles/115001847347-How-do-remote-key-handoffs-work-  Also I ask that you photograph the odometer before and after your trip and let me know if you went over mileage.  I am flexible with mileage but we have to discuss it first.  I keep my prices low this way.  Thanks!',
      dailyDistance: 80,
      weeklyDistance: 550,
      monthlyDistance:1500,
      ownerName: 'Mr. Sapte',
      milage: '24 MPG' ,
      fuelType: 'Gas(Premium)' ,
      doorCount: '4',
      seatCount: '4',
    },
    {
      id : 3,
      carName: 'Lamborgini',
      carYear: '2004',
      carImagePath: '../../assets/images/HomePageBackround.jpg',
      carTrips: 315,
      carPrice: 64,
      description: 'A note on over-mileage:  I am absolutely willing to work with you on miles.  I give good discounts for over-mileage to good renters who upload the required photos and follow the directions, and inform me about the overmileage  Just ask me!  Thanks' ,
      features: 'Good sound system (no aux jack though).  Get out those old CDs!  Nice for long trips as well as errands and it lives for Ikea runs.  Has 2 12V outlets and I have included a 5v USB charger in the front',
      parkingDetails: 'Parked on the street at 128 Morris st.  Park on the street, NOT in the lot.  Even though SF is not easy, where it is parked in SOMA there are spots on morris most days day in the afternoon and evenings are no problem at all.  The only exception is Monday night because of street sweeping',
      guidelines: 'I do remote key handoff.  I will require your drivers license and photo per Turo terms - https://support.turo.com/hc/en-us/articles/115001847347-How-do-remote-key-handoffs-work-  Also I ask that you photograph the odometer before and after your trip and let me know if you went over mileage.  I am flexible with mileage but we have to discuss it first.  I keep my prices low this way.  Thanks!',
      dailyDistance: 80,
      weeklyDistance: 550,
      monthlyDistance:1500,
      ownerName: 'Mr. Sapte',
      milage: '24 MPG' ,
      fuelType: 'Gas(Premium)' ,
      doorCount: '4',
      seatCount: '4',
    },
    {
      id : 3,
      carName: 'Lamborgini',
      carYear: '2004',
      carImagePath: '../../assets/images/HomePageBackround.jpg',
      carTrips: 315,
      carPrice: 84,
      description: 'A note on over-mileage:  I am absolutely willing to work with you on miles.  I give good discounts for over-mileage to good renters who upload the required photos and follow the directions, and inform me about the overmileage  Just ask me!  Thanks' ,
      features: 'Good sound system (no aux jack though).  Get out those old CDs!  Nice for long trips as well as errands and it lives for Ikea runs.  Has 2 12V outlets and I have included a 5v USB charger in the front',
      parkingDetails: 'Parked on the street at 128 Morris st.  Park on the street, NOT in the lot.  Even though SF is not easy, where it is parked in SOMA there are spots on morris most days day in the afternoon and evenings are no problem at all.  The only exception is Monday night because of street sweeping',
      guidelines: 'I do remote key handoff.  I will require your drivers license and photo per Turo terms - https://support.turo.com/hc/en-us/articles/115001847347-How-do-remote-key-handoffs-work-  Also I ask that you photograph the odometer before and after your trip and let me know if you went over mileage.  I am flexible with mileage but we have to discuss it first.  I keep my prices low this way.  Thanks!',
      dailyDistance: 80,
      weeklyDistance: 550,
      monthlyDistance:1500,
      ownerName: 'Mr. Sapte',
      milage: '24 MPG' ,
      fuelType: 'Gas(Premium)' ,
      doorCount: '4',
      seatCount: '4',
    }
  ];

  getCars(): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      this.httpClient.get<Array<any>>('http://localhost:3000/cars')
      .subscribe(data => {
        console.log(data as string []);
        resolve(data as string[]);
      },
      error => {
        reject(error);
      });
    });
    return promise;

  }
  getCar(query) {
    let promise = new Promise((resolve, reject) => {

      this.httpClient.get('http://localhost:3000/cars/'+ query).subscribe(
        data => {
          resolve(data);
          console.log(data);
        }

      );


    });
    return promise;


  }


  getCarsforUser(userId) {
    let promise = new Promise((resolve, reject) => {

      this.httpClient.get('http://localhost:3000/cars?userId=' + userId).subscribe(
        data => {
          resolve(data);
          console.log(data);
        });
    });
    return promise;
  }

  updateCar(input, id){
    console.log(input);
    this.httpClient.put('http://localhost:3000/cars/' + id,
      {
        carName: input.carName,
        carYear: input.carYear,
        carImagePath: input.carImagePath,
        userId:  input.userId,
        carPrice: input.carPrice,
        description: input.description,
        features: input.features,
        parkingDetails: input.parkingDetails,
        guidelines: input.guidelines,
        dailyDistance: input.dailyDistance,
        weeklyDistance: input.weeklyDistance,
        monthlyDistance: input.monthlyDistance,
        milage:  input.milage,
        fuelType:  input.fuelType,
        doorCount: input.doorCount,
        seatCount: input.seatCount,
      })
      .subscribe(
          data => {
              console.log('PUT Request is successful ', data);
          },
          error => {
              console.log('Error', error);
          }
      );
  }

  putCar(input) {
    console.log(input);
    this.httpClient.post('http://localhost:3000/cars',
      {
        carName: input.carName,
        carYear: input.carYear,
        carImagePath: input.carImagePath,
        carTrips: 0,
        userId:  input.userId,
        carPrice: input.carPrice,
        description: input.description,
        features: input.features,
        parkingDetails: input.parkingDetails,
        guidelines: input.guidelines,
        dailyDistance: input.dailyDistance,
        weeklyDistance: input.weeklyDistance,
        monthlyDistance: input.monthlyDistance,
        milage:  input.milage,
        fuelType:  input.fuelType,
        doorCount: input.doorCount,
        seatCount: input.seatCount,
      })
      .subscribe(
          data => {
              console.log('POST Request is successful ', data);
          },
          error => {
              console.log('Error', error);
          }
      );
}



doPayment(payment){
  console.log(payment);
    let promise = new Promise((resolve, reject) => {
    this.httpClient.post('http://localhost:3000/bookings',
      {
         'userId': payment.userName,
         'carId': payment.carId,
         'booking_startTime': payment.startDate,
         'booking_endTime': payment.endDate,
         'booking_price': payment.bookingprice,

      })
      .subscribe(
          data => {
            resolve(data);
            console.log(data);
          },
          error => {
              console.log('Error', error);
          });
    });
    return promise;
}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {
  constructor(private http: HttpClient) {

  }
   cars = [
    {
      id : 1,
      carName: 'Honda CRV',
      carYear: '2013',
      carImagePath: '../../assets/images/HomePageBackround.jpg',
      carTrips: 217,
      carPrice: 38,
    },
    {
      id : 2,
      carName: 'Honda CRV',
      carYear: '2014',
      carImagePath: '../../assets/images/HomePageBackround.jpg',
      carTrips: 317,
      carPrice: 34,
    },
    {
      id : 3,
      carName: 'Lamborgini',
      carYear: '2004',
      carImagePath: '../../assets/images/HomePageBackround.jpg',
      carTrips: 315,
      carPrice: 54,
    },
    {
      id : 3,
      carName: 'Lamborgini',
      carYear: '2004',
      carImagePath: '../../assets/images/HomePageBackround.jpg',
      carTrips: 315,
      carPrice: 54,
    },
    {
      id : 3,
      carName: 'Lamborgini',
      carYear: '2004',
      carImagePath: '../../assets/images/car.jpg',
      carTrips: 315,
      carPrice: 54,
    },
    {
      id : 3,
      carName: 'Lamborgini',
      carYear: '2004',
      carImagePath: '../../assets/images/HomePageBackround.jpg',
      carTrips: 315,
      carPrice: 54,
    },
    {
      id : 3,
      carName: 'Lamborgini',
      carYear: '2004',
      carImagePath: '../../assets/images/HomePageBackround.jpg',
      carTrips: 315,
      carPrice: 54,
    }
  ];

  getCars():Promise<any> {
    let promise = new Promise((resolve, reject) => {
      this.http.get<Array<any>>('http://localhost:3000/cars')
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
  getCar(id: Number) {
    const car = this.cars.find(
      (c) => {
        return c.id === id;
      }
    );
    return car;
  }

}

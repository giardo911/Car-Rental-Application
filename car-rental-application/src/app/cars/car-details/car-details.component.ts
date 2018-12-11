///<reference types="@types/googlemaps" />
import { CarsService } from '../../services/cars.services';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router'
import * as moment from 'moment';


import{Observable} from 'rxjs';
 import { GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core';
 import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
 import { Component, Input, ViewChild, NgZone, OnInit,AfterViewInit } from '@angular/core';
 import {  AgmMap } from '@agm/core';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  
  checkoutForm: FormGroup;
private carObj ={};
private newObj={};
longitude  =72.97699829999999;
 latitude =19.1985353;
 registerForm :FormGroup;
private startDate : Date;
show: boolean = false;
 // map: google.maps.Map;
  infoWindow: any;
  pos: any;
  raduisOfSearch: any;
  yourlocation: any;
  markers: any[];
  zipcode: string;
  selectedStore: any;
  orderBy: string;
  totalprice

   geocoder:any;
    
 //infowindow = new google.maps.InfoWindow();

 private days : any
endDate :Date;
startTime;
endTime;
private startDate1 : Date;
private price: number = 100;
private carName: string = 'Mazda';
private doorCount: string = 'Mazda';
private seatCount: string = 'Mazda';
private fuelType: string = 'Mazda';
private milage: string = 'Mazda';
private description: string = 'Mazda';
private features: string = 'Mazda';
private parkingDetails: string = 'Mazda';
private guideLines: string = 'Mazda';
private dailyDistance: number = 100;
private weeklyDistance: number = 100;
private monthlyDistance: number = 100;
private ownerName : string ="Mr. Iyer" ;
private carYear :string ;
private imgPath : string;
private carImages =[];

constructor(private carservice:  CarsService,private active : ActivatedRoute,private formBuilder: FormBuilder, private route: Router ,public mapsApiLoader: MapsAPILoader,
  private zone: NgZone,
  private wrapper: GoogleMapsAPIWrapper) { 

    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsApiLoader.load().then(() => {
    this.geocoder = new google.maps.Geocoder();
    });
  }

  ngOnInit() {
let id = this.active.snapshot.params['id'];
    console.log("ID::::;"+id);
    this.orderBy="";
  

 setTimeout(()=> {
 this.getLocation();

 },1000);
 //this.getLocation("Landon");

this.active.params.subscribe(
  (params) => {
   id = params['id'];
  }
)
 this.carservice.getCar(id).then(

   data =>{
     console.log("DATA:::::::"+data[0].carName)
     this.carObj =data[0]
     this.populateCarsDetails(this.carObj);

    }
 );




}

getLocation() {
  console.log("in get location::::::::");
  this.geocoder = new google.maps.Geocoder()
//  if (!this.geocoder) this.geocoder = new google.maps.Geocoder()
    this.geocoder.geocode({
      'address': "10,Ketan society, dhobi ali,tembhi naka thane,Maharashtra, India, 400601"
    }, (results, status) => {
      console.log(results);
      if (status == google.maps.GeocoderStatus.OK) {
                // decompose the result

                console.log(results[0].geometry.bounds.j.l);
                console.log(results[0].geometry.bounds.l.l);
      } else {
        alert("Sorry, this search produced no results.");
      }
    })


}



populateCarsDetails(carObj){
console.log("abc"+carObj);


this.price = carObj.carPrice;
this.carName =carObj.carName;
this.carYear = carObj.carYear;
this.imgPath =carObj.carImagePath;
console.log("Car:::::::"+this.carName);
this.description = carObj.description;
this.milage = carObj.milage
this.fuelType = carObj.fuelType
this.features = carObj.features
this.parkingDetails = carObj.parkingDetails
this.guideLines = carObj.
this.dailyDistance = carObj.dailyDistance
this.weeklyDistance = carObj.weeklyDistance
this.monthlyDistance = carObj.monthlyDistance
this.ownerName = carObj.ownerName
this.doorCount  = carObj.doorCount
this.seatCount = carObj.seatCount
this.carImages =[this.imgPath,'assets/images/car10.png','assets/images/car12.png' ]
}


onCheckout(f){
console.log("in checkout ::::::");
console.log("Date:::::::::::::::::::::"+f.value.startDate);
  }




proceed(f: NgForm){
  this.startDate =new Date ( f.value.stDate);
  console.log(this.startDate)
this.endTime = f.value.endTime;
this.endDate = new Date (f.value.endDate);
this.startTime =f.value.stTime;
this.endTime = f.value.endTime;

console.log("end dtm::::"+(f.value.endDate + f.value.endTime))
console.log(this.startTime)
console.log(this.endTime)


//let newDate = new Date(dateString);
var now = moment(this.startDate); //todays date
var end = moment(this.endDate); // another date
var duration = moment.duration(end.diff(now));
var days = duration.asDays();
console.log(days);
console.log(this.price);

 this.totalprice =this.price * days;
console.log("price::::"+this.totalprice);
this.newObj= JSON.parse(localStorage.currentCar);
localStorage.setItem( 'carId',this.newObj['_id'] );
localStorage.setItem('startdate',(f.value.stDate + f.value.stTime) )
localStorage.setItem('enddate',(f.value.endDate + f.value.endTime) ) 
localStorage.setItem('bookingPrice',this.totalprice)

this.newObj= JSON.parse(localStorage.currentUser);
console.log("user::::::::"+ localStorage.currentUser);
this.route.navigate(['payment']);
this.datevalidate1(f.value.stDate,f.value.endDate);





}

datevalidate1(stdt: string , eddt: string){
  
  // this.days = eddt - stdt;
  if(stdt > eddt){
    console.log("validating dt::");
    return true;
    }




}

}

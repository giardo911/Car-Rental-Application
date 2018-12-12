///<reference types="@types/googlemaps" />
import { CarsService } from '../../services/cars.services';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router'
import * as moment from 'moment';


import{Observable} from 'rxjs';
 import { GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core';
 import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
 import { Component, Input, ViewChild, NgZone, OnInit,AfterViewInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.services';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
  providers:[NgbRatingConfig]
})
export class CarDetailsComponent implements OnInit {


  checkoutForm: FormGroup;
  isLoggedIn;
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
id;
condition = false;
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
private rating;
constructor(private carservice:  CarsService,config: NgbRatingConfig,private active : ActivatedRoute,private formBuilder: FormBuilder, private route: Router ,public mapsApiLoader: MapsAPILoader,
  private zone: NgZone,
  private wrapper: GoogleMapsAPIWrapper,private authService : AuthenticationService) {
    config.max = 5;
    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsApiLoader.load().then(() => {
    this.geocoder = new google.maps.Geocoder();
    });
  }

  ngOnInit() {
    this.rating = 2.5;
    this.isLoggedIn = this.authService.checkLoggedInUser();
    console.log(this.isLoggedIn);
    if(!this.isLoggedIn){
      alert("Kindly Login into your account");
      this.route.navigate(['']);
    }
    this.newObj= JSON.parse(localStorage.currentUser)[0];
console.log( this.newObj);
 this.id = this.active.snapshot.params['id'];
    console.log("ID::::;"+this.id);
    this.orderBy="";



 //this.getLocation("Landon");

this.active.params.subscribe(
  (params) => {
   this.id = params['id'];
  }
)
 this.carservice.getCar(this.id).then(

   data =>{
     console.log(data);
     this.carObj =data
     console.log("aaaaaaaaa"+this.carObj);
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

  // this.geocoder.geocode({ 'address': "Boston" }, function (results, status) {
  //   if (status == google.maps.GeocoderStatus.OK) {
  //       this.map.setCenter(results[0].geometry.location);
  //       console.log("location:::"+results[0].geometry.location);

  //       //var marker = new google.maps.Marker({map: this.map,position: results[0].geometry.location,icon: imageURL,title: title});
  //   }})


  // this.selectedStore = null;
 let that = this;
   let loc = "Boston";
 console.log("in location::::");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      that.pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      console.log(that.pos);

})
  }

}
populateCarsDetails(carObj){
console.log("abc"+carObj);


this.price = carObj.carPrice;
this.carName =carObj.carName;
this.carYear = carObj.carYear;
this.imgPath =carObj.carImagePath;
this.description = carObj.description;
this.milage = carObj.milage
this.fuelType = carObj.fuelType
this.features = carObj.features
this.parkingDetails = carObj.parkingDetails
this.guideLines = carObj.guideLines
this.dailyDistance = carObj.dailyDistance
this.weeklyDistance = carObj.weeklyDistance
this.monthlyDistance = carObj.monthlyDistance
this.ownerName = carObj.ownerName
this.doorCount  = carObj.doorCount
this.seatCount = carObj.seatCount
this.carImages =[this.imgPath,'assets/images/car10.png','assets/images/car12.png' ]
this.latitude =carObj.latitude
this.longitude = carObj.longitude
}


onCheckout(f){
console.log("in checkout ::::::");
console.log("Date:::::::::::::::::::::"+f.value.startDate);
  }


//   getLocation(address: string): Observable<any> {
//     console.log('Getting address: '+ address);

//     let geocoder = new google.maps.Geocoder();
//     return Observable.create(observer => {
//         geocoder.geocode({
//             'address': address
//         }, (results, status) => {
//             if (status == google.maps.GeocoderStatus.OK) {
//                 observer.next(results[0].geometry.location);
//                 observer.complete();
//                 console.log("location::"+results[0].geometry.location);

//             } else {
//                 console.log('Error: ', results, ' & Status: ', status);
//                 observer.error();
//             }
//         });
//     });
// }



  //map markers code

  private map
  initMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: new google.maps.LatLng(-33.91722, 151.23064)
    });

    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var icons = {
      parking: {
        icon: iconBase + 'parking_lot_maps.png'
      },
      library: {
        icon: iconBase + 'library_maps.png'
      },
      info: {
        icon: iconBase + 'info-i_maps.png'
      }
    };

    var features = [
      {
        position: new google.maps.LatLng(-33.91721, 151.22630),
        type: 'info'
      }, {
        position: new google.maps.LatLng(-33.91539, 151.22820),
        type: 'info'
      }, {
        position: new google.maps.LatLng(-33.91747, 151.22912),
        type: 'info'
      }, {
        position: new google.maps.LatLng(-33.91910, 151.22907),
        type: 'info'
      }, {
        position: new google.maps.LatLng(-33.91725, 151.23011),
        type: 'info'
      }, {
        position: new google.maps.LatLng(-33.91872, 151.23089),
        type: 'info'
      }, {
        position: new google.maps.LatLng(-33.91784, 151.23094),
        type: 'info'
      }, {
        position: new google.maps.LatLng(-33.91682, 151.23149),
        type: 'info'
      }, {
        position: new google.maps.LatLng(-33.91790, 151.23463),
        type: 'info'
      }, {
        position: new google.maps.LatLng(-33.91666, 151.23468),
        type: 'info'
      }, {
        position: new google.maps.LatLng(-33.916988, 151.233640),
        type: 'info'
      }, {
        position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
        type: 'parking'
      }, {
        position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
        type: 'parking'
      }, {
        position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
        type: 'parking'
      }, {
        position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
        type: 'parking'
      }, {
        position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
        type: 'parking'
      }, {
        position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
        type: 'parking'
      }, {
        position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
        type: 'parking'
      }, {
        position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
        type: 'library'
      }
    ];

    // Create markers.
    features.forEach(function(feature) {
      var marker = new google.maps.Marker({
        position: feature.position,
        icon: icons[feature.type].icon,
        map: this.map
      });
    });
  }



proceed(f: NgForm){

  console.log(f)
  this.condition =(f.value.stDate > f.value.endDate);

if (!(f.value.stDate > f.value.endDate)){

  this.startDate =new Date ( f.value.stDate);
  console.log(this.startDate)
this.endTime = f.value.endTime;
this.endDate = new Date (f.value.endDate);
this.startTime =f.value.stTime;
this.endTime = f.value.endTime;

console.log("end dtm::::"+(f.value.endDate + ' ' + f.value.endTime + '.00'));
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

localStorage.setItem( 'carId',this.id);
localStorage.setItem('startdate',(f.value.stDate + ' ' + f.value.stTime + '.00') )
localStorage.setItem('enddate',(f.value.endDate + ' ' +  f.value.endTime + '.00') )
localStorage.setItem('bookingPrice',this.totalprice)


this.route.navigate(['payment']);
this.datevalidate1(f.value.stDate,f.value.endDate);

}






}

datevalidate1(stdt: string , eddt: string){

  // this.days = eddt - stdt;
  if(stdt > eddt){
    console.log("validating dt::");
    return true;
    }




}

}

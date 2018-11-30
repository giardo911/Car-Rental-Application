import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class UsersService {
  constructor(private httpClient: HttpClient) {
  }
  users = [];
  user = {};
   getUsers() {
    let promise = new Promise((resolve, reject) => {
      this.httpClient.get<Array<any>>('http://localhost:3000/users')
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

  putUser(input) {
      console.log(input.FirstName);
      this.httpClient.post('http://localhost:3000/users',
        {
           'FirstName': input.FirstName,
           'LastName': input.LastName,
           'Email': input.Email,
           'Password': input.Password,
           'Address1': input.Address1,
           'Address2': input.Address2,
           'City': input.City,
           'State': input.State,
           'Zip': input.Zip,
           'Alerts': input.Alerts
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
  getUser(query: String): Promise<any> {

    let promise = new Promise((resolve, reject) => {

      this.httpClient.get('http://localhost:3000/users?Email=' + query).subscribe(
        data => {
          resolve(data);
          console.log(data);
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );


    });
    return promise;


  }

  checkUserEmailExists(emailId) {
    this.httpClient.get('http://localhost:3000/users/email/' + emailId).subscribe(
      data => {
        this.users = data as string [];    // FILL THE ARRAY WITH DATA.
        console.log(this.users);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

    console.log(this.users + ' '  + this.users.length);

    if  (this.users.length !== 0) {
      console.log(this.users);
      return true;
    }
    else{
      return false;
    }

  }
}

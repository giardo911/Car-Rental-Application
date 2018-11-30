import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class UsersService {
  constructor(private httpClient: HttpClient) {
  }
  users = [];

  getUsers() {
    console.log('In get users');
    this.httpClient.get('http://localhost:3000/users/').subscribe(
      data => {
        this.users = data as string [];    // FILL THE ARRAY WITH DATA.
        console.log(this.users);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    console.log(this.users);
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
  
  getUser(id: String) {
    const user = this.users.find(
      (c) => {
        return c.id === id;
      }
    );
    return user;
  }
}

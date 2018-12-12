import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class UsersService {
  constructor(private httpClient: HttpClient) {
  }
  users = [];


/**
 *
 *Method Name:- Get Users
 */
  user = {};
  //Method to fetch all users based on query params
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

  /**
   *
   * @param input ]
   *
   * To Put user
   */

  //Method to add a new user object into the database
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
           'ProfilePic' : input.ProfilePic,
           'Alerts': input.Alerts
        })
        .subscribe(
            data => {
                console.log('POST Request is successful ', data);
            },
            error => {
                console.log('Error', error);
            });
  }

  /**
   *
   * @param input
   *
   * To  update user
   */
  //Method to update an existing user object in the database.
  updateUser(input) {
    console.log(input.FirstName);
    alert(input.ProfilePicPath);
    this.httpClient.put('http://localhost:3000/users/' + input.userId,
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
         'ProfilePicPath' : input.ProfilePicPath,
         'Alerts': input.Alerts
      })
      .subscribe(
          data => {
              console.log('PUT Request is successful ', data);
          },
          error => {
              console.log('Error', error);
          });
}
/**
 *
 * @param query
 *
 * TO get single user with a paticular user id
 */

//Method to fetch a particular user object based on the ID
getUserId(query: String): Promise<any> {

  let promise = new Promise((resolve, reject) => {
    this.httpClient.get('http://localhost:3000/users?_id=' + query).subscribe(
      data => {
        resolve(data);
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      });
  });
  return promise;
}

//Method to add new ratings into the user object
updateRating(input, id){
  let promise = new Promise((resolve, reject) => {
    console.log(input);
    let body = {"rating" : input}
    this.httpClient.put('http://localhost:3000/users/' + id, body).subscribe(
      data => {
        resolve(data);
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      });
  });
  return promise;
}

  //Method to get user based on Email
  getUser(query: String): Promise<any> {

    let promise = new Promise((resolve, reject) => {

      this.httpClient.get('http://localhost:3000/users?Email=' + query).subscribe(
        data => {
          resolve(data);
          console.log(data);
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        });
    });
    return promise;
  }

  //Method to get user based on Id
  getUserById(id): Promise<any>{
    let promise = new Promise((resolve, reject) => {
      this.httpClient.get<Array<any>>('http://localhost:3000/users/' + id)
      .subscribe(data => {
        console.log(data);
        resolve(data);
      },
      error => {
        reject(error);
      });
    });
    return promise;
  }



  async checkUserEmailExists(emailId) {
    let result = await this.httpClient.get('http://localhost:3000/users?Email=' + emailId).toPromise();
    console.log(result);
    return result;
  }

}

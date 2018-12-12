# Kryptons Final Project - Car Rental Server
The application server will have REST API exposed which can be used by the application to add and update existing listings of the cars and also book and cancel any bookings done by the customer.

## Built With 
- [VS Code](https://www.eclipse.org/ide/)
- [MongoDB](https://www.mongodb.com/what-is-mongodb)
- [NodeJS](https://tomcat.apache.org/download-80.cgi)

## Versioning 
This whole project was maintained using [Github](https://github.com/) a Versioning tool.

## Coding Style
- **Get List of Cars** <br>
  This api returns a JSON array of all available cars <br>
  ```
  GET /cars
  ```
- **Add New Car** <br>
  This api returns a JSON array of newly added car <br>
  ```
  POST /cars {car Object}
  ```
- **Update Existing Cars** <br>
  This api returns a JSON array of updated car values <br>
  ```
  PUT /cars/{carId}
  ```  
- **Delete Existing Car** <br>
  This api deletes a car from the Database <br>
  ```
  DELETE /cars/{carId}
  ```


- **Get List of Users** <br>
  This api returns a JSON array of all available users <br>
  ```
  GET /users
  ```
- **Add New User** <br>
  This api returns a JSON array of newly added users <br>
  ```
  POST /users {car Object}
  ```
- **Update Existing User** <br>
  This api returns a JSON array of updated user values <br>
  ```
  PUT /users/{userId}
  ```  



- **Get List of Bookings** <br>
  This api returns a JSON array of all available bookings <br>
  ```
  GET /bookings
  ```
- **Add New Booking** <br>
  This api returns a JSON array of newly added bookings <br>
  ```
  POST /bookings {booking Object}
  ```
- **Update Existing Booking** <br>
  This api returns a JSON array of updated booking values <br>
  ```
  PUT /bookings/{bookingId} 
  ```  
- **Delete Existing Booking** <br>
  This api deletes a booking from the Database <br>
  ```
  DELETE /bookings/{bookingId}
  ```

  
## Prerequisite
 * Install [Node](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) or latest.
 * Install MongoDB and Apache Tomcat Server.
 
## Steps to Run
 * Download or Clone Repository to local directory `git clone URL`.
 * Open Command Prompt and navigate to local directory `cd <localdirectory-path>`.
 * Install npm dependencies `npm install`
 * Start server `npm run start`

##  Author
- Jayesh Iyer
- Rajat Acharya
- Pratik Patil


##  Acknowledgments
- [Mongo Documentation](https://docs.mongodb.com/v3.6/)


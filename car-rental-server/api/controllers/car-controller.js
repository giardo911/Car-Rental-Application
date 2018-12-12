/**
 * Controller for car endpoints.
 */

'use strict';
//import car service.
const carService = require('../services/car-service');
/**
 * Returns a list of car in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    let callback = function (cars) {
        response.status(200);
        response.json(cars);
    };
    carService.search(request.query, callback);
};

/**
 * Creates a new car with the request JSON and
 * returns car JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    let newCar = Object.assign({}, request.body),
        callback = function (car) {
        response.status(200);
        response.json(car);
    };
    carService.save(newCar, callback);
};

/**
 * Updates and returns a car object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    let car = Object.assign({}, request.body),
        callback = function (car) {
        response.status(200);
        response.json(car);
    };
    car._id = request.params.carId;
    carService.update(car, callback);
};

exports.find = function (request, response) {
        let callback = function (car) {
        response.status(200);
        response.json(car);
    };
    let id = request.params.carId;
    carService.find(id, callback);
};

exports.delete = function (request, response) {
    let callback = function (car) {
    response.status(200);
    response.json(car);
};
let id = request.params.carId;
carService.delete(id, callback);
};
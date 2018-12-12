/**
 * Controller for sticky endpoints.
 */

'use strict';
//import sticky service.
const bookingService = require('../services/booking-service');
/**
 * Returns a list of stickies in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    let callback = function (bookings) {
        response.status(200);
        response.json(bookings);
    };
    bookingService.search(request.query, callback);
};

/**
 * Creates a new sticky with the request JSON and
 * returns sticky JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    let newBooking = Object.assign({}, request.body),
        callback = function (booking) {
        response.status(200);
        response.json(booking);
    };
    bookingService.save(newBooking, callback);
};

exports.find = function (request, response) {
    let callback = function (booking) {
        response.status(200);
        response.json(booking);
    };
    let id = request.params.bookingId;
    bookingService.findById(id, callback);
};

exports.update = function (request, response) {
    let booking = Object.assign({}, request.body),
        callback = function (booking) {
        response.status(200);
        response.json(booking);
    };
    booking._id = request.params.bookingId;
    console.log(booking);
    bookingService.update(booking, callback);
};
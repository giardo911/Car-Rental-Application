/**
 * Service for user operations.
 */

'use strict';
const mongoose = require('mongoose'),
    Booking = mongoose.model('booking');

/**
 * Throws error if error object is present.
 *
 * @param {Object} error {Error object}
 */
let throwError = function (error) {
    if (error) {
        throw Error(error);
    }
};

/**
 * Returns an array of user object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 * @param {function} callback {Sucess callback function}
 */
exports.search = function (params, callback) {
    let resultCallback = function (err, bookings) {
        throwError(err);
        callback(bookings);
    };
    console.log(params);
    Booking.find(params, resultCallback);
};


/**
 * Saves and returns the new user object.
 *
 * @param {Object} user {User object}
 * @param {function} callback {Sucess callback function}
 */
exports.save = function (booking, callback) {
    let newBooking = new Booking(booking),
        resultCallback = function (err, booking) {
            throwError(err);
            callback(booking);
    };
    newBooking.save(resultCallback);
};


exports.findById = function (id, callback) {
    let resultCallback = function (err, booking) {
        throwError(err);
        callback(booking);
    };
    Booking.findById(id,resultCallback);
};

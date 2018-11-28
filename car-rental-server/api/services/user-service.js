/**
 * Service for sticky operations.
 */

'use strict';
const mongoose = require('mongoose'),
    User = mongoose.model('users');

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
 * Returns an array of sticky object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 * @param {function} callback {Sucess callback function}
 */
exports.search = function (params, callback) {
    let resultCallback = function (err, users) {
        throwError(err);
        callback(users);
    };
    User.find(params, resultCallback);
};

/**
 * Saves and returns the new sticky object.
 *
 * @param {Object} user {User object}
 * @param {function} callback {Sucess callback function}
 */
exports.save = function (user, callback) {
    let newUser = new User(user),
        resultCallback = function (err, user) {
            throwError(err);
            callback(user);
    };
    newUser.save(resultCallback);
};

/**
 * Updates and returns the sticky object.
 *
 * @param {Object} user {User object}
 * @param {function} callback {Sucess callback function}
 */
exports.update = function (user, callback) {
    let resultCallback = function (err, user) {
        throwError(err);
        callback(user);
    };
    user.modified_date = new Date();
    User.findOneAndUpdate({
        _id: user._id
    }, user, {
        new: true
    }, resultCallback);
};

/**
 * Service for sticky operations.
 */

'use strict';

const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey: 'a1e4d507',
  apiSecret: 'PMSeuvB38tyS3oVj'
  
})


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
 * @param {Object} params {Request parameters}
 * @param {function} callback {Sucess callback function}
 */
exports.send = function (params, callback) {
    
    let resultCallback = function (err, message) {
        throwError(err);
        callback("Success");
    };
    const from = '16177856038'
    const to = '18572075996'
    const text = 'Hello from Nexmo'

    nexmo.message.sendSms(from, to, text, resultCallback);
};
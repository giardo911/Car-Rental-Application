/**
 * Controller for sticky endpoints.
 */

'use strict';
//import sticky service.
const smsService = require('../services/sms-service');
/**
 * Returns a list of stickies in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.send = function (request, response) {
    let callback = function (users) {
        response.status(200);
        response.json(users);
    };
        
    smsService.send(request.query, callback);
};      


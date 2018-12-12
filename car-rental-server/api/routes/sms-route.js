/**
 * Sticky endpoint route definitions.
 */

'use strict';
module.exports = function (app) {
    const smsController = require('../controllers/sms-controller');
    // Sticky Routes for search and create.
    app.route('/send/sms')
        .post(smsController.send);


};
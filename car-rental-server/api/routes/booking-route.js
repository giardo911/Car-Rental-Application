/**
 * Sticky endpoint route definitions.
 */

'use strict';
module.exports = function (app) {
    const bookingController = require('../controllers/booking-controller');
    // Sticky Routes for search and create.
    app.route('/bookings')
        .get(bookingController.list)
        .post(bookingController.post);
    
    app.route('/bookings/:bookingId')
        .get(bookingController.find)
        .put(bookingController.update);

    
    
        
};        
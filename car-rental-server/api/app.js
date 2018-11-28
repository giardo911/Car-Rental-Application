'use strict';
module.exports = function (app) {
    //Initialize models
    let carModel = require('./models/car');
    let userModel = require('./models/user');

    //Initialize routes
    let carRoutes = require('./routes/car-route');
    carRoutes(app);
    let userRoutes = require('./routes/user-route');
    userRoutes(app);

};
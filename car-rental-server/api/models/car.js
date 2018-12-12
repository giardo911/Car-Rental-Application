'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for car object.
 */
let CarSchema = new Schema({
    /**
     * Title of the car.
     */
    carName: {
        type: String,
        required: "Name is required"
    },
    carYear: {
        type: String,
        required: "Year is required"
    },
    carImagePath: {
        type: String,
        required: "ImagePath is required"
    },
    carTrips: {
        type: Number,
        required: "Trips is required",
        default : 0
    },
    carPrice: {
        type: Number,
        required: "Price is required"
    },
    description: {
        type: String,
        required: "Description is required"
    },
    features: {
        type: String,
        required: "features is required"
    },
    parkingDetails: {
        type: String,
        required: "parkingDetails is required"
    },
    guidelines: {
        type: String,
        required: "guidelines is required"
    },
    dailyDistance: {
        type: Number,
        required: "dailyDistance is required"
    },
    weeklyDistance: {
        type: Number,
        required: "weeklyDistance is required"
    },
    monthlyDistance: {
        type: Number,
        required: "monthlyDistance is required"
    },
    userId: {
        type: String,
        required: "userId is required"
    },
    milage: {
        type: String,
        required: "milage is required"
    },
    fuelType: {
        type: String,
        required: "fuelType is required"
    },
    doorCount: {
        type: String,
        required: "doorCount is required"
    },
    seatCount: {
        type: String,
        required: "seatCount is required"
    },
    address:{
        type: String,
        required: "address is required"
    },
    city:{
        type: String,
        required: "address is required"
    },
    state:{
        type: String,
        required: "address is required"
    },
    zip:{
        type: String,
        required: "address is required"
    },
    latitude:{
        type: Number,
        required: "address is required"
    },
    longitude:{
        type: Number,
        required: "address is required"
    },

    /**
     * car created date.
     */
    created_date: {
        type: Date,
        default: Date.now
    },
    /**
     * Last modified date.
     */
    modified_date: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('cars', CarSchema);

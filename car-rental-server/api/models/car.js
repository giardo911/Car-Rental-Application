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
    title: {
        type: String,
        required: "title is required"
    },
    make: {
        type: String,
        required: "make is required"
    },
    model: {
        type: String,
        required: "model is required"
    },
    color: {
        type: String,
        required: "color is required"
    },
    seats: {
        type: Number,
        required: "seats is required"
    },
    /**
     * car created date.
     */
    created_date: {
        type: Date,
        default: Date.now
    },
    /**
     * car content.
     */
    content: {
        type: String
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

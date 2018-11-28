'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for user object.
 */
let UserSchema = new Schema({
    /**
     * Title of the user.
     */
    FirstName: {
        type: String,
        required: "FirstName is required"
    },
    LastName: {
        type: String,
        required: "LastName is required"
    },
    Email: {
        type: String,
        required: "Email is required"
    },
    Password: {
        type: String,
        required: "Password is required"
    },
    Address1: {
        type: String,
        required: "Address1 is required"
    },
    Address2: {
        type: String,
    },
    City: {
        type: String,
        required: "City is required"
    },
    State: {
        type: String,
        required: "State is required"
    },
    Zip: {
        type: Number,
        required: "ZipCode is required"
    },
    Alerts: {
        type: Number
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

module.exports = mongoose.model('users', UserSchema);

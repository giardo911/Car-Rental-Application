/**
 * Service for sticky operations.
 */

'use strict';
let multer = require('multer'),
    path = require('path');

let uploadedPath = '';

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
exports.save = function (req, res, callback) {
    
    let resultCallback = function (err, message) {
        throwError(err);
        callback(uploadedPath);
    };
    let upload = multer({
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, __dirname + './../../../car-rental-application/src/assets/images/');
            },
            filename: function (req, file, cb) {

                uploadedPath = path.basename(file.originalname,path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname); 
                cb(null, uploadedPath);
            }
        })
    })

    return upload.single('image')(req, res, resultCallback);

};
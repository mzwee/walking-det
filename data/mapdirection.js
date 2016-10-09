'use strict';
var https = require('https');
// var Mockgen = require('./mockgen.js');
/**
 * Operations on /mapdirection
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     * operationId: mapdirection_get
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: 'maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood4&key=AIzaSyAKjk7jKmZbDIP0CEGZtMqw79h6MCabKJY',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};

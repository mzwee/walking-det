'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /mapdirection/origin={origin}-destination={destination}
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: origin, destination
     * produces: application/json, text/json
     * responses: 200
     * operationId: mapdirections_get
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/mapdirection/origin={origin}-destination={destination}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};

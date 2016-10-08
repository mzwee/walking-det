'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /map-direction/&amp;{origin_in}&amp;{destination_in}
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: origin_in, destination_in
     * produces: application/json, text/json
     * responses: 200
     * operationId: map_direction_get
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/map-direction/&amp;{origin_in}&amp;{destination_in}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};

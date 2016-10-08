'use strict';
var dataProvider = require('../../data/map-direction/&amp;{origin_in}&amp;{destination_in}.js');
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
     */
    get: function map_direction_get(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};

'use strict';
var dataProvider = require('../../data/mapdirection/origin={origin}-destination={destination}.js');
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
     */
    get: function mapdirections_get(req, res, next) {
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

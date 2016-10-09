'use strict';
var dataProvider = require('../data/mapdirection.js');
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
     */
    get: function mapdirection_get(req, rez, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            console.log(data);
            console.log(data.responses);
            if (err) {
                next(err);
                return;
            }
            rez.status(status).send(data && data.statusCode);
            // console.log("WDYWWYWYWYWYYWYWYWWYYW" +data)
        });
        // res.on('end', function () {
            
        //     return;
        // });
        // req.onres.status(status).send(data);
    }
};

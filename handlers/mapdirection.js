'use strict';
var dataProvider = require('../data/mapdirection.js');
var Promise = require('promise');
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
        console.log("WDHIUAWJDHPABFPA" + provider);
        // console.log(provider.output_json);
        provider(req, function (err, data) {
            var promise = new Promise(function (resolve, reject) {
            if (err) reject(err);
            else {
                rez.status(status).send(data && data.statusCode);
                resolve(res);
            }
            });
            return;
            // console.log("WDYWWYWYWYWYYWYWYWWYYW" +data)
        });
        // res.on('end', function () {
            
        //     return;
        // });
        // req.onres.status(status).send(data);
    }
};

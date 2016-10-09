'use strict';
var Promise = require('promise');
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

        //     downloadGoogleData(query, function(err, data)){
        //         var promise = new Promise(function (resolve, reject) {
        //         var options = {
        //             hostname: 'maps.googleapis.com',
        //             path: '/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood4&key=AIzaSyAKjk7jKmZbDIP0CEGZtMqw79h6MCabKJY&mode=driving',
        //             method: 'GET',
        //             set_headers: {'Content-Type':'application/json'}
        //         };
        //         https.get(options, function(err, res){
        //         if(err) {
        //           reject(err);
        //         }
        //         else{
        //             res.on('data', function(d){
        //                 var output = d.toString('utf8');
        //             });
        //             resolve(data);
        //             }
        //         }  
        //     } 
        // }  

        //     downloadGoogleData(query, function(err, data)){
        //         console.log(data);
        //     });
            // Mockgen().responses({
            //     path: 'maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood4&key=AIzaSyAKjk7jKmZbDIP0CEGZtMqw79h6MCabKJY',
            //     operation: 'get',
            //     response: '200'
            // }, callback);
        }
    }
};

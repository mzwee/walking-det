'use strict';
var https = require('https');
var Promise = require('promise');
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
            var promise = new Promise(function (resolve, reject){
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            var options = {
              hostname: 'maps.googleapis.com',
              path: '/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood4&key=AIzaSyAKjk7jKmZbDIP0CEGZtMqw79h6MCabKJY&mode=driving',
              method: 'GET',
              set_headers: {'Content-Type':'application/json'}
            };
            https.get(options, function(rez, err){
                if(err) reject(err);
                else{
                    rez.on('data', function(d){
                        var output = d.toString('utf8');
                        console.log("OUTPUT IS " + output)
                        // var parseString = require('xml2js').parseString;
                        // var output_json = JSON.stringify(parseString(output));
                        // console.log(output_json);
                        resolve(rez);
                        callback;
                    });
                }
                
            });
        });
            // res.on('end', function () {
            // callback(output_json);
            // });
            // return output_json;
        }
    }
};

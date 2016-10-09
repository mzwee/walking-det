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
            var output = ''
            var output_json = ''
            var options = {
              hostname: 'maps.googleapis.com',
              path: '/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood4&key=AIzaSyAKjk7jKmZbDIP0CEGZtMqw79h6MCabKJY&mode=driving',
              method: 'GET',
              set_headers: {'Content-Type':'application/json'}
            };
            callback = https.get(options, (res) => {
              res.on('data', (d) => {
                var output = process.stdout.write(d);
              });

            }).on('error', (e) => {
              console.error(e);
            });
            var parseString = require('xml2js').parseString;
            var output_json = JSON.stringify(parseString(output));
            // res.on('end', function () {
            // callback(output_json);
            // });
            return output_json;
        }
    }
};

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
            // fs.readFile(filename, enc, function (err, res){
              if (err) reject(err);
              // else resolve(res);
            
            // });
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            // var output = ''
            // var output_json = ''
            var options = {
              hostname: 'maps.googleapis.com',
              path: '/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood4&key=AIzaSyAKjk7jKmZbDIP0CEGZtMqw79h6MCabKJY&mode=driving',
              method: 'GET',
              set_headers: {'Content-Type':'application/json'}
            };
            https.get(options, (res) => {
              res.on('data', (d) => {
                var output = process.stdout.write(d);
                var parseString = require('xml2js').parseString;
                var output_json = JSON.stringify(parseString(output));
                resolve(res);
                return;
              });

            }).on('error', (e) => {
              console.error(e);
              reject(err);
            });
            });
            // res.on('end', function () {
            // callback(output_json);
            // });
            // return output_json;
        }
    }
};

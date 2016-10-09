'use strict';
var https = require('https');
/**
 * Operations on /mapdirection/origin={origin}-destination={destination}
 */

/*Javascript friendly JSON function from Mozilla*/
function jsFriendlyJSONStringify (s) {
    return JSON.stringify(s).
        replace(/\u2028/g, '\\u2028').
        replace(/\u2029/g, '\\u2029');
}

function processGmap(gmaps){
    // console.log("Arraging");
    // console.log(gmaps);
    gmaps = eval('(' + jsFriendlyJSONStringify(gmaps) + ')');
    // gmaps = jsFriendlyJSONStringify(gmaps);
    console.log(gmaps);
    // gmaps = JSON.parse(gmaps);
    // console.log(gmaps);
    console.log(gmaps.routes);
    // console.log(JSON.parse(gmaps));
}

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
        var output = ''
        var gmaps = null;
        var options = {
              hostname: 'maps.googleapis.com',
              path: '/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood4&key=AIzaSyAKjk7jKmZbDIP0CEGZtMqw79h6MCabKJY&mode=walking',
              method: 'GET',
              set_headers: {'Content-Type':'application/json'}
            };
        https.get(options, function(resp, err){
            if(err) {
              res.send(err);
              // return;
            }
            else{
                resp.on('data', function(d){
                    // output += d.toString('utf8');
                    output += d.toString('utf8');

                    // console.log(json_obj);
                    gmaps = processGmap(output);
                    // resp.send(output);
                });
            }
        });
        
        res.status(status).send('/mapdirection/origin={origin}-destination={destination}');
        // var provider = dataProvider['get']['200'];
        // provider(req, res, function (err, data) {
        //     if (err) {
        //         next(err);
        //         return;
        //     }
        //     res.status(status).send(data && data.responses);
        // });
    }
};

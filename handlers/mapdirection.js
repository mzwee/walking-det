'use strict';
var https = require('https');
function jsFriendlyJSONStringify (s) {
    return JSON.stringify(s).
        replace(/\u2028/g, '\\u2028').
        replace(/\u2029/g, '\\u2029');
}

function processGmap(gmaps){
    gmaps = eval('(' + jsFriendlyJSONStringify(gmaps) + ')');
    console.log(gmaps);
}

module.exports = {
    getGoogleMapDirection:function(origin, destination){   
        var status = 200;
        var output = ''
        var gmaps = null;
        path_map = '/maps/api/directions/json?origin=' + origin + '&destination=' + destination + '&key=AIzaSyAKjk7jKmZbDIP0CEGZtMqw79h6MCabKJY&mode=walking'
        var options = {
              hostname: 'maps.googleapis.com',
              path: path_map,
              method: 'GET',
              set_headers: {'Content-Type':'application/json'}
            };
        https.get(options, function(resp, err){
            if(err) {
              return err;
            }
            else{
                resp.on('data', function(d){
                    // output += d.toString('utf8');
                    output += d.toString('utf8');

                    // console.log(json_obj);
                    gmaps = processGmap(output);
                    return gmaps;
                    // resp.send(output);
                });
            }
        });
        
    }
}
        

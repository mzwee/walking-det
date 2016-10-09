'use strict';
var Path = require('path');
var apiPath = Path.resolve(__dirname, '../config/swagger.json');
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyAKjk7jKmZbDIP0CEGZtMqw79h6MCabKJY'
});


module.exports = function () {
    /**
     * Cached mock generator
     */
    // mockgen = mockgen || Swagmock(apiPath);
    var googleMapsClient = require('@google/maps').createClient({
	key: 'AIzaSyAKjk7jKmZbDIP0CEGZtMqw79h6MCabKJY'
	});

// Geocode an address.
	googleMapsClient.geocode({
	address: '1600 Amphitheatre Parkway, Mountain View, CA'
	}, function(err, response) {
	if (!err) {
		console.log(response.json.results);
		}
	});
    return googleMapsClient;
};

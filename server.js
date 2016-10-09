'use strict';
var port = process.env.PORT || 8000;
var Http = require('http');
var Express = require('express');
var BodyParser = require('body-parser');
var Swaggerize = require('swaggerize-express');
var swaggerUi = require('swaggerize-ui');
var Path = require('path');
var twilio = require('twilio')

var App = Express();

var Server = Http.createServer(App);

App.use(BodyParser.json());
App.use(BodyParser.urlencoded({
    extended: true
}));

App.use(Swaggerize({
    api: Path.resolve('./api.json'),
    handlers: Path.resolve('./handlers'),
    docspath: '/swagger'
}));

App.use('/docs', swaggerUi({
    docs: '/swagger'
}));

App.post('/route', function(req, res) {
    var twiml = new twilio.TwimlResponse();
    if (req.body.Body == 'hello') {
        twiml.message('Hi!');
    } else if(req.body.Body == 'bye') {
        twiml.message('Goodbye');
    } else {
        twiml.message('No Body param match, Twilio sends this in the request to your server.');
    }
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});


Server.listen(port, function () {
});

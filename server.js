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
    var msg = req.body.Body.toLowerCase();
    var re = new RegExp("^from:(.+);.*to:(.+)$");
    var data = re.exec(msg);
    if(data.length != 3) {
        twiml.message("Invalid address. Please make sure you type the address correctly in this format: from:____;to:____");
    } else {
        twiml.message("We've received your request. We'll get back to you in 3 minutes");
    }
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});


Server.listen(port, function () {
});

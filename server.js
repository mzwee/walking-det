'use strict';
var port = process.env.PORT || 8000,
    Http = require('http'),
    Express = require('express'),
    BodyParser = require('body-parser'),
    Swaggerize = require('swaggerize-express'),
    swaggerUi = require('swaggerize-ui'),
    Path = require('path'),
    twilio = require('twilio'),
    App = Express(),
    Server = Http.createServer(App),
    dotenv = require('dotenv');
dotenv.load();

var Storage = require('azure-storage'),
    tableService = Storage.createTableService(),
    safetyScore = require('./handlers/safetyscore');
    
tableService.createTableIfNotExists('safetyTable', function(error, result, response) {
    if(error) {
        throw error;
    }
});

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

'use strict';
var port = process.env.PORT || 8000,
    Http = require('http'),
    Express = require('express'),
    BodyParser = require('body-parser'),
    Swaggerize = require('swaggerize-express'),
    swaggerUi = require('swaggerize-ui'),
    Path = require('path'),
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

Server.listen(port, function () {
});

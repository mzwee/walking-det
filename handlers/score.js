'use strict';
var dotenv = require('dotenv');
dotenv.load();

var Storage = require('azure-storage'),
    tableService = Storage.createTableService();

/**
 * Operations on /score
 */
module.exports = {
    get: function (req, res, next) {
        tableService.retrieveEntity('safetyTable', req.query.lat1 + '|' + req.query.lon1, req.query.lat2 + '|' + req.query.lon2,
            function(error, result, response) {
                if(error) {
                    if(error.statusCode == 404) {
                        res.status(200).send(-1);
                    } else {
                        res.status(error.statusCode).send({message: error.message});
                    }
                } else {
                    res.status(response.statusCode).send({score: result.score._});
                }
            });
    }
};

'use strict';
var dotenv = require('dotenv');
dotenv.load();

var Storage = require('azure-storage'),
    tableService = Storage.createTableService();

/**
 * Operations on /scoreupdate
 */
module.exports = {
    post: function (req, res, next) {
        var entGen = Storage.TableUtilities.entityGenerator;
        var scoreData = {
            PartitionKey: entGen.String(req.query.lat1 + '|' + req.query.lon1),
            RowKey: entGen.String(req.query.lat2 + '|' + req.query.lon2),
            lat1: entGen.String(req.query.lat1),
            lon1: entGen.String(req.query.lon1),
            lat2: entGen.String(req.query.lat2),
            lon2: entGen.String(req.query.lon2),
            score: entGen.Int32(req.query.score),
            count: entGen.Int32(1)
        };
        // TODO: Convert to promises to avoid callback hell
        tableService.insertEntity('safetyTable', scoreData, function(error, result, response) {
            if(error) {
                if(error.statusCode == 409) {
                    tableService.retrieveEntity('safetyTable', req.query.lat1 + '|' + req.query.lon1, req.query.lat2 + '|' + req.query.lon2,
                        function(error, result, response) {
                            result.score = entGen.Int32(Math.round((parseInt(result.score._) * parseInt(result.count._) + parseInt(scoreData.score._)) / (parseInt(result.count._) + 1)));
                            result.count = entGen.Int32(parseInt(result.count._) + 1);
                            tableService.replaceEntity('safetyTable', result, function(error, result, response) {
                                if(error) {
                                    res.status(error.statusCode).send({message: error.message});
                                } else {
                                    res.status(200).send();
                                }
                            });
                        }); 
                } else {
                    res.status(error.statusCode).send({message: error.message});
                }
            } else {
                res.status(200).send();
            }
        });
    }
};

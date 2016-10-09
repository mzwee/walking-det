'use strict';
var dotenv = require('dotenv');
dotenv.load();

var Storage = require('azure-storage'),
    tableService = Storage.createTableService();

module.exports = {
  saveall: function(data, score) {
    var dataLength = data.length;
    for(var i = 0; i < dataLength; ++i) {
      saveorupdate(data[i].start_location.lat, data[i].start_location.lon, data[i].end_location.lat, data[i].end_location.lon, score);
    }
  },

  queryall: function(data) {
    var dataLength = data.length;
    var totalScore = 0;
    var totalDatapoint = 0;
    for(var i = 0; i < dataLength; ++i) {
      var score = query(data[i].start_location.lat, data[i].start_location.lon, data[i].end_location.lat, data[i].end_location.lon);
      if(score != -1) {
        totalScore += score;
        ++totalDatapoint;
      }
    }
    if(totalDatapoint) {
      return totalScore / totalDatapoint;
    } else {  
      return -1;
    }
  },

  saveorupdate: function(lat1, lon1, lat2, lon2, score) {
    var entGen = Storage.TableUtilities.entityGenerator;
    var scoreData = {
      PartitionKey: entGen.String(lat1 + '|' + lon1),
      RowKey: entGen.String(lat2 + '|' + lon2),
      lat1: entGen.String(lat1),
      lon1: entGen.String(lon1),
      lat2: entGen.String(lat2),
      lon2: entGen.String(lon2),
      score: entGen.Int32(score),
      count: entGen.Int32(1)
    };
    console.log(scoreData);

    tableService.insertEntity('safetyTable', scoreData, function(error, result, response) {
      if(error) {
        if(error.statusCode == 409) {
          tableService.retrieveEntity('safetyTable', lat1 + '|' + lon1, lat2 + '|' + lon2,
            function(error, result, response) {
              result.score = entGen.Int32(Math.round((parseInt(result.score._) * parseInt(result.count._) + parseInt(scoreData.score._)) / (parseInt(result.count._) + 1)));
              result.count = entGen.Int32(parseInt(result.count._) + 1);
              tableService.replaceEntity('safetyTable', result, function(error, result, response) {
                if(error) {
                  return false;
                } else {
                  return true;
                }
              });
            }); 
          } else {
            return false;
          }
        } else {
          return true;
        }
      });
    },

    query: function (lat1, lon1, lat2, lon2) {
      tableService.retrieveEntity('safetyTable', lat1 + '|' + lon1, lat2 + '|' + lon2,
        function(error, result, response) {
          if(error) {
            if(error.statusCode == 404) {
              return -1;
            }
          } else {
            return result.score._;
          }
        });
    }
};

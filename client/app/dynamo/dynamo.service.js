'use strict';

angular.module('teamChurroApp')
  .factory('Dynamo', function ($q) {

    var table = null;

    // Public API here
    return {
      init: function () {
          AWS.config.credentials = {
            accessKeyId: 'AKIAIWSFCRQA523IEYYQ',
            secretAccessKey: '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'
          };
          AWS.config.region = 'us-east-1';
        table = new AWS.DynamoDB({params: {TableName: 'beatchurro'}});
      },

      get: function (domain) {
        var d = $q.defer();

        if(!table) {
          d.reject();
        } else {
          table.getItem({Key: {domain: {S: domain}, ts: {S: "1970-01-01T00:00:00Z"}}}, function (err, data) {
            if (err) {
              console.log("error: ", err);
              d.reject(err);
            }
            if (data.Item && data.Item.vendors) {
              d.resolve(data.Item.vendors.SS);
            }
            else {
              console.log("no data: ", data);
              d.resolve([]);
            }
          });
        }

        return d.promise;
      },

      put: function (domain, vendors) {

        var d = $q.defer();

        if(!table) {
          d.reject();
        } else {
          var itemParams = {
            domain: {S: domain},
            ts: {S: "1970-01-01T00:00:00Z"},
            vendors: {SS: vendors}
          };

          table.putItem({Item: itemParams}, function (err) {
            if (err) {
              console.log("error: ", err);
              d.reject();
            } else {
              d.resolve();
            }
          });
        }

        return d.promise;
      }
    };
  });

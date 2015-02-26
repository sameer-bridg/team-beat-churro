'use strict';

/*
 Example use:

    vendor_put_vendors_by_domain('panera', ['onevendor','anothervendor']);
    vendor_get_vendors_by_domain('panera'); // will return [] if no entry
*/

var vendor_aws_init = function() {
    AWS.config.credentials = {
        accessKeyId: 'AKIAIWSFCRQA523IEYYQ',
        secretAccessKey: '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' 
    };
    AWS.config.region = 'us-east-1';
}

var vendor_get_vendors_by_domain = function(domain) {
    vendor_aws_init(); // TODO: this should only be done once, when the app is init'ed

    var table = new AWS.DynamoDB({params: {TableName: 'beatchurro'}});
    table.getItem({Key: {domain: {S: domain}, ts: {S: "1970-01-01T00:00:00Z"}}}, function(err, data) {
        if (err) {
            console.log("error: " + err);
            return;
        }
        if (data.Item && data.Item.vendors) { 
            return data.Item.vendors.SS;
        }
        else {
            console.log("no data: " + data);
            return [];
        }
    });
};

var vendor_put_vendors_by_domain = function(domain, vendors) {
    vendor_aws_init(); // TODO: this should only be done once, when the app is init'ed

    var table = new AWS.DynamoDB({params: {TableName: 'beatchurro'}});
    var itemParams = {
        domain: {S: domain},
        ts: {S: "1970-01-01T00:00:00Z"},
        vendors: {SS: vendors}
    };
    table.putItem({Item: itemParams}, function(err) {
        if (err) {
            console.log("error: " + err);
        }
    });
};

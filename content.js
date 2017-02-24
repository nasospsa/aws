// module.exports = "It works from content.js.";

var aws = require('aws-lib');

var config = {
    awsId:     'AKIAJUMBIFVUUZ5DJU3A',
    awsSecret: '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',
    assocId:   'PRODUCMEN-21',
    locale:    'UK'
};

// var {OperationHelper} = require('apac');
// var opHelper = new OperationHelper(config);

// console.log(opHelper);
// opHelper.scheme = 'https';

// opHelper.execute('ItemSearch', {
//   'SearchIndex': 'Books',
//   'Keywords': 'harry potter',
//   'ResponseGroup': 'ItemAttributes,Offers'
// }).then((response) => {
//     console.log("Results object: ", response.result);
//     console.log("Raw response body: ", response.responseBody);
// });

console.log(config.awsId, config.awsSecret, config.assocId);
var client = aws.createProdAdvClient(config.awsId, config.awsSecret, config.assocId, {
  host: 'webservices.amazon.co.uk',
  secure: null
});

console.log(client);

client.call('ItemSearch', {
  'SearchIndex': 'Books',
  'Keywords': 'harry potter',
  'ResponseGroup': 'ItemAttributes,Offers'
}, function(err, result) {
  console.log(err, result);
  // console.log("Results object: ", response.result);
  // console.log("Raw response body: ", response.responseBody);
});

// var AmazonAPI = require('amz-products');

// var amazon = new AmazonAPI({
//   accessKeyId: 'AKIAJUMBIFVUUZ5DJU3A',
//   secretAccessKey: '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',
//   associateId: 'PRODUCMEN-21',
//   locale: 'UK'
// });

// amazon.getItemsInBrowseNode({
//   BrowseNode: 1234566
// }, function(err, res){
//   console.log(res);
// });
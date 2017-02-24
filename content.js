// module.exports = "It works from content.js.";

const {OperationHelper} = require('apac');

const opHelper = new OperationHelper({
    awsId:     'AKIAJUMBIFVUUZ5DJU3A',
    awsSecret: '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',
    assocId:   'PRODUCMEN-21',
    locale:    'UK'
});

console.log(opHelper);
opHelper.scheme = 'https';

opHelper.execute('ItemSearch', {
  'SearchIndex': 'Books',
  'Keywords': 'harry potter',
  'ResponseGroup': 'ItemAttributes,Offers'
}).then((response) => {
    console.log("Results object: ", response.result);
    console.log("Raw response body: ", response.responseBody);
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
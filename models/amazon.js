var aws = require('aws-lib');

var config = {
    awsId:     'AKIAJUMBIFVUUZ5DJU3A',
    awsSecret: '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',
    assocId:   'PRODUCMEN-21',
    locale:    'UK'
};

var client = aws.createProdAdvClient(config.awsId, config.awsSecret, config.assocId, {
  host: 'webservices.amazon.co.uk',
  secure: null
});


module.exports = client;
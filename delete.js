var aws = require('aws-sdk');
var credentials = require('./credentials.json');
var dynamodb = new aws.DynamoDB(credentials);

/**
 * Deletes a single item in a table by primary key.
 */
dynamodb.deleteItem({
  TableName: 'beers',
  Key: {
    BeerID: {
      S: '1'
    }
  },
  ReturnItemCollectionMetrics: 'SIZE',
  ReturnValues: 'NONE'
}, function(err, data) {
  if (err) {
    console.log(err, err.stack);
  } else {
    console.log(data);
  }
});
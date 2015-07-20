var aws = require('aws-sdk');
var credentials = require('./credentials.json');
var dynamodb = new aws.DynamoDB(credentials);

/**
 * Edits an existing item's attributes, or adds a new item to the table if it does not already exist.
 */
dynamodb.updateItem({
  TableName: 'beers',
  Key: {
    BeerID: {
      S: '1'
    }
  },
  AttributeUpdates: {
    name: {
      Action: 'PUT',
      Value: {
        S: 'Saint Beer Malte'
      }
    }
  },
  ReturnItemCollectionMetrics: 'SIZE',
  ReturnValues: 'ALL_NEW'
}, function(err, data) {
  if (err) {
    console.log(err, err.stack);
  } else {
    console.log(data);
  }
});
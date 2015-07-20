var aws = require('aws-sdk');
var credentials = require('./credentials.json');
var dynamodb = new aws.DynamoDB(credentials);

/**
 * Creates a new item, or replaces an old item with a new item.
 */
dynamodb.putItem({
  TableName: 'beers',
  Item: {
    BeerID: {
      S: '1'
    },
    name: {
      S: 'Saint Beer'
    },
    ingredients: {
      SS: ['Malte', 'Água'] 
    }
  },
  ReturnItemCollectionMetrics: 'NONE',
  ReturnValues: 'ALL_OLD'
}, function(err, data) {
  if (err) {
    console.log(err, err.stack);
  } else {
    console.log(data);
  }
});
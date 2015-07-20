var aws = require('aws-sdk');
var credentials = require('./credentials.json');
var dynamodb = new aws.DynamoDB(credentials);

/**
 * A Query operation uses the primary key of a table or a secondary index to directly access items from that table or index.
 */
dynamodb.query({
  TableName: 'beers',
  AttributesToGet: [
    'name'
  ],
  KeyConditions: {
    BeerID: {
      ComparisonOperator: 'EQ',
      AttributeValueList: [{
        S: '1'
      }]
    }
  },
  QueryFilter: {
    name: {
      ComparisonOperator: 'CONTAINS',
      AttributeValueList: [{
        S: 'Saint'
      }]
    }
  }
}, function(err, data) {
  if (err) {
    console.log(err, err.stack);
  } else {
    console.log(data);
  }
});
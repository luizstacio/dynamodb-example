var aws = require('aws-sdk');
var credentials = require('./credentials.json');
var dynamodb = new aws.DynamoDB(credentials);

/**
 * The Scan operation returns one or more items and item attributes
 * by accessing every item in a table or a secondary index. To have DynamoDB return fewer items, 
 * you can provide a ScanFilter operation.
 */
dynamodb.scan({
  TableName: 'beers',
  // AttributesToGet: [
  //   'name'
  // ],
  // Select: 'COUNT',
  Select: 'ALL_ATTRIBUTES',
  ScanFilter: {
    ingredients: {
      ComparisonOperator: 'CONTAINS',
      AttributeValueList: [
        {
          S: 'Água'
        }
      ]
    }
  },
  Limit: 10
}, function(err, data) {
  if (err) {
    console.log(err, err.stack);
  } else {
    console.log(data);
  }
});
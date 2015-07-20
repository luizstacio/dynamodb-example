var aws = require('aws-sdk');
var credentials = require('./credentials.json');
var dynamodb = new aws.DynamoDB(credentials);

dynamodb.listTables({}, function(err, data) {
  if (err) {
    console.log(err, err.stack);
  } else {
    console.log(data);
  }
});
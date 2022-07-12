'use strict';
const AWS = require('aws-sdk');

module.exports.delete = async (event) => {
  const body = JSON.parse((event.body).toString());
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const id=body.name
  const putParams = {
    TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
   Key:{
    "id":{
        S:id
    }
   }
  };
  await dynamoDb.delete(putParams).promise();

  return {
    statusCode: 201,
    message: "Deleted Successfully"
  };
};